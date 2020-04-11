import React from 'react';
import * as S from './UserCard.styled';

const UserCard = ({ picture, login, name, email, location, cell, phone, getModalInfo }) => (
  <S.CardContainer onClick={() => getModalInfo({ location, cell, phone, name })}>
    <S.StyledImage alt='user-pic' src={picture.large} />
    <S.Info>
      <S.Fields>
        <S.Label>Username:</S.Label>
        <S.UserData>{login.username}</S.UserData>
      </S.Fields>
      <S.Fields>
        <S.Label>Name:</S.Label>
        <S.UserData>{`${name.first} ${name.last}`}</S.UserData>
      </S.Fields>
      <S.Fields>
        <S.Label>E-mail:</S.Label>
        <S.UserData>{email}</S.UserData>
      </S.Fields>
    </S.Info>
  </S.CardContainer>
);

export default UserCard;
