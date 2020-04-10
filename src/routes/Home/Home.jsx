import React from 'react';

import UserCard from 'components/UserCard/UserCard';
import Spinner from 'components/Spinner/Spinner';
import * as S from './Home.styled';

const Home = ({ users, isLoading, filteredName }) => (isLoading ? (
  <Spinner />
) : (
  <S.Container>
    {users
      .filter((user) => {
        const userName = `${user.name.first} ${user.name.last}`;
        return userName.toLowerCase().includes(filteredName.toLowerCase());
      })
      .map(({
        name, email, location, nat, picture, login, cell,
      }) => (
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
));

export default Home;
