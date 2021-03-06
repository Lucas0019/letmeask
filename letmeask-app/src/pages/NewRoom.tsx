import { Link } from 'react-router-dom';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustration" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire duvidas de sua audiencia em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>Quer entrar em uma sala já existente? 
            <Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}