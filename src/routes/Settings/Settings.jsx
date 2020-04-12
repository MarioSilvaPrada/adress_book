import React from 'react';
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// library to check if a specific element is in viewport
import { useInView } from 'react-intersection-observer';

import * as actions from 'state/actions';

import * as S from './Settings.styled';

const Settings = ({ setFilter, filteredCountry }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <S.Wrapper>
      <S.Container ref={ref} inView={inView}>
        <S.StyledButton type="button" onClick={goBack}>
          <FaArrowLeft style={{ marginRight: '.8rem' }} />
          Go back
        </S.StyledButton>
        <S.InputContainer>
          Filter by nationality
          <S.Select value={filteredCountry} onChange={(e) => setFilter(e.target.value)}>
            <option data-testid="counter" value="">All</option>
            <option value="CH">Switzerland</option>
            <option value="ES">Spain</option>
            <option value="FR">France</option>
            <option value="GB">United Kingdom</option>
          </S.Select>
        </S.InputContainer>
      </S.Container>
    </S.Wrapper>
  );
};

const mapStateToProps = ({ users }) => ({
  filteredCountry: users.countryFilter,
});

const mapDispatchToProps = {
  setFilter: actions.filterByCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
