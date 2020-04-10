import React from 'react';

import UserCard from 'components/UserCard/UserCard';
import Spinner from 'components/Spinner/Spinner';

// library to fecth more users in the end of page
import InfiniteScroll from 'react-infinite-scroll-component';
import * as S from './Home.styled';

const Home = ({
  users, isLoading, filteredName, filteredCountry, fetchMore,
}) => (isLoading ? (
  <Spinner />
) : (
  <InfiniteScroll
    dataLength={users.length}
    next={fetchMore}
    hasMore
    loader={<Spinner />}
    endMessage={<b>End of users catalog</b>}
  >
    <S.Container>
      {users
        .filter((user) => {
          const userName = `${user.name.first} ${user.name.last}`;
          return userName.toLowerCase().includes(filteredName.toLowerCase());
        })
        .filter((user) => user.nat.includes(filteredCountry))
        .map(({
          name, email, location, picture, login, cell,
        }) => (
          <UserCard
            key={cell}
            name={name}
            email={email}
            location={location}
            picture={picture}
            login={login}
          />
        ))}
    </S.Container>
  </InfiniteScroll>
));

export default Home;
