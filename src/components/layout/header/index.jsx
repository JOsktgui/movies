import React from 'react';
import arrowDown from 'images/arrow-down.svg';
import Container, { Avatar } from './styles';

const Header = () => {
  return (
    <Container>
      <div />
      <Avatar>
        <img
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-beard-boy-casual-220453.jpg&fm=jpg'
          alt='avatar'
        />
        <span>Admin</span>
        <img
          src={arrowDown}
          alt='arrow-down'
        />
      </Avatar>
    </Container>
  );
};

export default Header;
