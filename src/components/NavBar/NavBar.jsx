import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'state/actions';
import { useLocation } from 'react-router-dom';

import * as S from './NavBar.styled';

const NavBar = ({ filterByName }) => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.StyledLink to="/">Home</S.StyledLink>
      <S.StyledLink to="/settings">Settings</S.StyledLink>
      {pathname === '/' && (
        <S.SearchWrapper>
          <S.SearchInput
            type="text"
            placeholder="Search by name"
            onChange={(e) => filterByName(e.target.value)}
          />
        </S.SearchWrapper>
      )}
    </S.Container>
  );
};

const mapDispatchToProps = {
  filterByName: actions.filterByName,
};

export default connect(null, mapDispatchToProps)(NavBar);
