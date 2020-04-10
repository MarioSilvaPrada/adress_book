import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 2rem;
    display: flex;
    background-color #ee9617;
    background-image linear-gradient(315deg, #ee9617 0%, #fe5858 74%);
`;

export const StyledLink = styled(Link)`
    margin-right: 2rem;
`;
