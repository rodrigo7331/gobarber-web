import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';
import header from '../../assets/header.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={header} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Rodrigo dos Santos</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Rodrigo dos Santos"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
