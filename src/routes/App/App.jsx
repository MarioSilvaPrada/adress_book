import React, { useEffect } from 'react';

import { connect } from 'react-redux';
// actions
import * as actions from 'state/actions';

import UserCard from 'components/UserCard/UserCard';
import * as S from './App.styled';


const App = ({
  usersData, users, loading, setLoading,
}) => {
  const getUserData = async () => {
    await usersData();
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map(({
          name, email, location, nat, picture, login,
        }) => (
          <UserCard
            key={login.username}
            name={name}
            email={email}
            location={location}
            picture={picture}
            login={login}
            nat={nat}
          />
        ))
      )}
    </S.Container>
  );
};

const mapStateToProps = ({ users, loading }) => ({
  users: users.users,
  loading: loading.loading,
});

const mapDispatchToProps = {
  usersData: actions.getUsers,
  setLoading: actions.setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
