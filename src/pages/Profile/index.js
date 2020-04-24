import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import { Container } from './styles';
import AvatarInput from './Avatarinput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((status) => status.user.profile);
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Nova senha" />
        <Input type="password" name="password" placeholder="Confirmar senha" />

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Sua senha atual"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
