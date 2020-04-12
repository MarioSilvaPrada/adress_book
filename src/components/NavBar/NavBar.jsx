import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'state/actions';
import { useLocation } from 'react-router-dom';

import { MdSearch, MdSettings } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import * as S from './NavBar.styled';

const NavBar = ({ filterByName, userInput }) => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      {pathname === '/' && (
        <S.SearchWrapper>
          <MdSearch style={{ marginRight: '.3rem' }} />
          <S.SearchInput
            type="text"
            placeholder="Search by name"
            onChange={(e) => filterByName(e.target.value)}
            value={userInput}
          />
          {userInput && (
            <S.ClearButton onClick={() => filterByName('')}>
              <IoIosCloseCircle />
            </S.ClearButton>
          )}
        </S.SearchWrapper>
      )}
      <S.StyledLink to="/settings" disableclick={pathname === '/settings' ? 1 : 0}>
        <MdSettings style={{ marginRight: '.3rem' }} />
        Settings
      </S.StyledLink>
    </S.Container>
  );
};

const mapStateToProps = ({ users }) => ({
  userInput: users.searchFilter,
});

const mapDispatchToProps = {
  filterByName: actions.filterByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
