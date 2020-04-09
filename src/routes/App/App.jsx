import React, { useEffect } from 'react';

import { connect } from 'react-redux';
// actions
import * as actions from 'state/actions';

import * as S from './App.styled';

const App = ({ usersData, users, loading }) => {
  useEffect(() => {
    usersData();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map(({ name, email, location, nat, picture, login }) => (
          <div key={login.username}>
            <img alt='user-pic' src={picture.large} />
            <p>
              Username:
              {login.username}
            </p>
            <p>
              Name:
              {`${name.first} ${name.last}`}
            </p>
            <p>
              E-mail:
              {email}
            </p>
            <p>
              Country:
              {location.country}
            </p>
            <p>{nat}</p>
          </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
