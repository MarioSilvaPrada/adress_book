import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

import UserCard from './UserCard';

afterEach(cleanup);

// data for testing
const picture = {
  large: 'https://randomuser.me/api/portraits/women/89.jpg',
};

const login = {
  username: 'whitepeacock451',
};

const name = {
  first: 'Janet',
  last: 'Vargas',
};

it('should has field Username', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <UserCard picture={picture} login={login} name={name} />
    </ThemeProvider>,
  );
  expect(getByTestId('username')).toHaveTextContent('Username:');
});

it('should has field Name', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <UserCard picture={picture} login={login} name={name} />
    </ThemeProvider>,
  );
  expect(getByTestId('name')).toHaveTextContent('Name:');
});

it('should has field Email', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <UserCard picture={picture} login={login} name={name} />
    </ThemeProvider>,
  );
  expect(getByTestId('email')).toHaveTextContent('E-mail:');
});
