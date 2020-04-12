import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-template-rows: repeat(auto-fill, 18rem);
  grid-gap: 1rem;
  padding: 5rem 2rem 2rem;
  width: 100%;
  min-height: 110vh;

  @media (max-width: 600px) {
    padding-top: 8rem;
  }
`;

export const DataWrapper = styled.div``;

export const Title = styled.div`color: red;`;

export const SpinnerWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
