import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 3.75rem;
    justify-content: space-between;
    padding: 0 1rem;
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

export const HeaderLeft = styled(Link)`
    display: flex;
    height: 100%;
    align-items: center;
`;

export const HeaderRight = styled.div`
    display: flex;
    height: 100%;
`;

export const Menu = styled(Link)`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
`;
