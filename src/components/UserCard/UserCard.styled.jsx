import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.black(0.1)};
  border-radius: .63rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: .5s;
  max-height: 18rem;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const Info = styled.div`font-size: .8rem;`;

export const StyledImage = styled.img`
  border-radius: 100%;
  width: 7rem;
  height: 7rem;
  margin-bottom: .5rem;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  margin: .4rem 0 .2rem;
`;

export const UserData = styled.p`font-size: .9rem;`;
