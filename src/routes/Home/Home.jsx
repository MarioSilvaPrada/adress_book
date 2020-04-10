import React from 'react';
import * as S from './Home.styled';

import UserCard from 'components/UserCard/UserCard';
import Spinner from 'components/Spinner/Spinner';

const Home = ({users, isLoading, filteredName}) => {
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

export default Home;
