import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Components
import UserCard from 'components/UserCard/UserCard';
import Spinner from 'components/Spinner/Spinner';
// actions
import * as actions from 'state/actions';

import * as S from './App.styled';

const App = ({ usersData, users, isLoading, setLoading, filteredName }) => {
  const getUserData = async () => {
    await usersData();
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <S.Container>
      {users
        .filter((user) => {
          const userName = `${user.name.first} ${user.name.last}`;
          return userName.toLowerCase().includes(filteredName.toLowerCase());
        })
        .map(({ name, email, location, nat, picture, login, cell }) => (
          <UserCard
            key={cell}
            name={name}
            email={email}
            location={location}
            picture={picture}
            login={login}
            nat={nat}
          />
        ))}
    </S.Container>
  );
};

const mapStateToProps = ({ users, loading }) => ({
  users: users.users,
  filteredName: users.searchFilter,
  isLoading: loading.loading,
});

const mapDispatchToProps = {
  usersData: actions.getUsers,
  setLoading: actions.setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
