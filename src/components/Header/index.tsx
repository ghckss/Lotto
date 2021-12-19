import React from 'react';

import {HeaderContainer, HeaderLeft, HeaderRight, Menu} from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft to='/'>Lotto Simulation</HeaderLeft>
            <HeaderRight>
                <Menu to='/home'>Home</Menu>
                <Menu to='/simulator'>Simulator</Menu>
                <Menu to='/ranking'>Ranking</Menu>
                <Menu to='/signin'>SignIn</Menu>
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
