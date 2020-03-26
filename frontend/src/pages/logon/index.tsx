import React from 'react';

import {FiLogIn} from 'react-icons/fi'

import { Container } from './styles';

import Logo from '../../assets/logo.svg'
import Image from '../../assets/heroes.png'

export default function App() {
  return (
    <Container>

      <section>
        <img src={Logo} alt="Be The Hero"/>

        <form action="">
          <h1>Faça o seu logon</h1>

          <input type="" placeholder="Sua ID" />
          <button type="submit" className="button">Entrar</button>
          <a href="/register" >
          <FiLogIn  size={16} color="#e02041" />
          Não tenho cadastro</a>
        </form>
      </section>

      <img src={Image} alt=""/>
      
    </Container>
  );
}
 