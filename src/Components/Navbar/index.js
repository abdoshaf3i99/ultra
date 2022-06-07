import React from 'react';
import { Link } from 'react-router-dom';
import './style.js';
import {
  NavbarSection,
  Logo,
  LogoText,
  UList,
  ListItem,
  Anchor,
} from './style.js';
const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText className="logo-text">Ultra Profile</LogoText>
        </Logo>
        <UList>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">Resum</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Link to="/contact">Contact</Link>
          </ListItem>
        </UList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
