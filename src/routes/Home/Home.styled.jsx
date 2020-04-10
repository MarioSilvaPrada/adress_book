import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-auto-rows: 17rem;
  grid-gap: 1rem;
  padding: 5rem 2rem 2rem;
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight});
`;

export const DataWrapper = styled.div``;

export const Title = styled.div`color: red;`;
