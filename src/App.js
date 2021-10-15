import { Header } from './components/Header';
import { Container } from './components/Container';

import './styles/App.scss';
import video from './assets/video/spiderman2.mp4';
import lines from './assets/svg-lines.svg';

function App() {
  return (
    <>

    <Header />

    {/* BACKGROUND VIDEO */}
      <section className="background">
        <video className="video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </section>

    {/* BACKGROUND LINHA */}
     <section className="background-lines">
       <img src={lines} alt="Linhas" />
     </section>

     {/* CONTAINER */}
      <Container />


    </>
  );
}

export default App;
