import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notifications from '../Notifications';
import header from '../../assets/header.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png{profile.avatar.url || '
              }
              alt="Perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
