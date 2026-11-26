import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import lotmsimbolo from '../assets/lotmsimbolo.jpeg';

function Home() {
  return (
    <section className={styles.PaginaHome}>
        <img
            src={lotmsimbolo}
            alt='Símbolo de Lord of mysteries'
            className={lotmsimbolo}
            />
      <h1 className={styles.TituloPrincipal}>Lord of Mysteries</h1>
      <p className={styles.Descricao}>
        Seja bem vindo ao mundo de Lord of Mysteries, uma obra de mistério e horror, 
        com temáticas baseadas no terror cósmico de Lovercraft, misticismo e etc, onde a obra
        se encontra em um mundo Steam Punk.

        O autor, Cuttlefish, passou a focar em sua carreira lançando sua primeira grande obra
        chamada de Throne of Magical Arcana, após isso, o mesmo passou a focar em fazer uma obra de 
        maior sucesso. Após lançar algumas obras, como The Sage Who Transcended Samsara, Martial Arts Master
        e etc, em 2018 lançou Lord of Mysteries, terminada em 2020, e continuado como o livro 2, 
        Circle of Inevitability, em 2023 e terminando em 2025, antes do lançamento tendo lançado 
        Embers Ad Infinitum em 2020.

        O nome da obra veio de dois pontos, a ideia central da obra sobre os mistérios dentro dela, tal qual
        recebeu esse título por conceitos dentro da obra que levaram à esse nome. Circle of Inevitability pega
        esse mesmo ponto, onde um conceito da obra influencia no nome da obra.

        Explore o catálogo com livros, jogos e adaptações em mídia do universo da obra. 


      </p>
      <Link to="/midias" className={styles.BotaoAcao}>
        Ir para Mídias
      </Link>
    </section>
  );
}

export default Home;