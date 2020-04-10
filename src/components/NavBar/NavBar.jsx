import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'state/actions';

import * as S from './NavBar.styled';

const NavBar = ({ filterByName }) => (
  <S.Container>
    <S.StyledLink to='/'>Home</S.StyledLink>
    <S.StyledLink to='/settings'>Settings</S.StyledLink>
    <S.SearchWrapper>
      <S.SearchInput
        type='text'
        placeholder='Search by name'
        onChange={(e) => filterByName(e.target.value)}
      />
    </S.SearchWrapper>
  </S.Container>
);

const mapDispatchToProps = {
  filterByName: actions.filterByName,
};

export default connect(null, mapDispatchToProps)(NavBar);
