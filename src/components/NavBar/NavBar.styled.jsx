import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const DisableClick = css`
  pointer-events: none;
  cursor: auto;
`;

export const Container = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color #ee9617;
    background-image linear-gradient(315deg, #ee9617 0%, #fe5858 74%);
    height: ${({ theme }) => theme.sizes.navbarHeight};
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 10;

    @media(max-width: 600px) {
      flex-direction: column-reverse;
      height: auto;
      padding: 1rem 2rem;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    ${({ disableclick }) => disableclick && DisableClick};

    @media(max-width: 600px) {
      margin-bottom: 1rem;
      align-self: flex-end;
    }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: white;
  position: relative;
  width: 20rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding: .5rem 1rem;
  border-radius: .6rem;
  border: none;
  font-size: 1rem;
  width:100%;
`;

export const ClearButton = styled.div`
  position: absolute;
  top: 25%;
  right: .6rem;
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.1rem;
  cursor: pointer;
`;
