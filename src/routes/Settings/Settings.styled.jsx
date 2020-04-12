import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
 from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Wrapper = styled.div`
  padding: 10rem 2rem 2rem;
  @media (max-width: 650px) {
    padding-top: 7rem;
  }
`;

export const Container = styled.div`
  width: 40rem;
  height: 50vh;
  margin: 0 auto;
  border-radius: .6rem;
  background-color: ${({ theme }) => theme.colors.black(0.2)};
  border: 3px solid ${({ theme }) => theme.colors.red};
  padding: 1rem;
  opacity: 0;
  animation: ${(props) => props.inView && Animation} .5s forwards cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: .5rem .8rem;
  background: ${({ theme }) => theme.colors.red};
  border-radius: .6rem;
  cursor: pointer;
  color: white;
  font-size: .88rem;
  font-weight: bold;
  transition: .5s;

  &:hover {
    background: ${({ theme }) => theme.colors.orange};
  }
`;

export const InputContainer = styled.label`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.red};
`;

export const Select = styled.select`
  border: none;
  margin-top: 1.5rem;
  width: 14rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.red};
  border: 2px solid ${({ theme }) => theme.colors.red};
`;
