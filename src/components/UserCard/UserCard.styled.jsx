import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.black(0.1)};
  border-radius: .63rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: #f9d29d;
  background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);
`;

export const Info = styled.div`font-size: .88rem;`;

export const StyledImage = styled.img`
  border-radius: 100%;
  width: 7rem;
  height: 7rem;
  margin-bottom: 1rem;
`;
