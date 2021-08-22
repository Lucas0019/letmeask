import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustration} alt="Ilustration" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire duvidas de sua audiencia em tempo real</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="letmeask" />
          <button type="button">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Codigo da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}