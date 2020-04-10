import React from 'react';
import * as S from './UserCard.styled';

const UserCard = ({ picture, login, name, email, location, nat }) => (
  <S.CardContainer>
    <S.StyledImage alt='user-pic' src={picture.large} />
    <S.Info>
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
    </S.Info>
  </S.CardContainer>
);

export default UserCard;
