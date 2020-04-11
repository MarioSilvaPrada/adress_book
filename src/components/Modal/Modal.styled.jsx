import styled from 'styled-components';

export const Background = styled.div`
  background: ${({ theme }) => theme.colors.black(0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 20;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  background: white;
  padding: 1rem 2rem;
  border-radius: .63rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  font-size: 1.1rem;
  margin-right: 4rem;
  ${({ theme }) => theme.colors.orange};
`;

export const CloseBtn = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color #ee9617;
    background-image linear-gradient(315deg, #ee9617 0%, #fe5858 74%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    font-size: 2rem;
    color: white;
`;

export const Info = styled.div`
    font-size: 1rem;
`

export const Label = styled.p`
    font-size: .88rem;
    font-weight: bold;
    margin: .8rem 0 .2rem;
    color: ${({ theme }) => theme.colors.orange};
`
