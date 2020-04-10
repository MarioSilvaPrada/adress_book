import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Settings.styled';

const Settings = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <S.Wrapper>
      <h1>Settings</h1>

      <S.Container>
        <button type="button" onClick={goBack}>
          Go back
        </button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Settings;
