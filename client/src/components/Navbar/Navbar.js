import React from 'react';
import RightDrawer from '../Common/RightDrawer/RightDrawer';
import { NavbarContainer } from './Navbar.styles';

const Navbar = () => {
    return (
        <NavbarContainer>
            <h4>Post App</h4>
            <RightDrawer content='Create Post'></RightDrawer>
        </NavbarContainer>
    );
};

export default Navbar;