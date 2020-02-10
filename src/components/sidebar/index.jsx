import React from 'react';
import Container, { Title, List } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <Title>
        MENU
      </Title>
      <List>
        <li>Dashboard</li>
        <li className='active'>Películas</li>
        <li>Turnos</li>
        <li>Administradores</li>
        <li>Perfil</li>
        <li>Cerrar Sesión</li>
      </List>
    </Container>
  );
};

export default Sidebar;
