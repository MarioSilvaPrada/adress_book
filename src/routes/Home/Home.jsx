import React, { useState } from 'react';

import UserCard from 'components/UserCard/UserCard';
import Spinner from 'components/Spinner/Spinner';
import Modal from 'components/Modal/Modal';

// library to fecth more users in the end of page
import InfiniteScroll from 'react-infinite-scroll-component';
import * as S from './Home.styled';

const Home = ({ users, isLoading, filteredName, filteredCountry, fetchMore }) => {
  // Modal State
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ modalInfo, setModalInfo ] = useState({});

  const getModalInfo = (info) => {
    setModalInfo(info);
    setIsModalVisible(true);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchMore}
      hasMore={users.length < 1000}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <b>End of users catalog</b>
        </p>
      }
    >
      <S.Container>
        {users
          .filter((user) => {
            const userName = `${user.name.first} ${user.name.last}`;
            return userName.toLowerCase().includes(filteredName.toLowerCase());
          })
          .filter((user) => user.nat.includes(filteredCountry))
          .map(({ name, email, location, picture, login, cell, phone }) => (
            <UserCard
              key={cell}
              name={name}
              email={email}
              location={location}
              picture={picture}
              login={login}
              cell={cell}
              phone={phone}
              getModalInfo={getModalInfo}
            />
          ))}
      </S.Container>
      {isModalVisible && <Modal modalInfo={modalInfo} setIsModalVisible={setIsModalVisible} />}
    </InfiniteScroll>
  );
};

export default Home;
