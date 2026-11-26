import { useState } from 'react';
import CardObras from '../components/CardObras';
import styles from './Midias.module.css';

import lotml1 from '../assets/lotml1.jpeg';
import lotml2 from '../assets/lotml2.jpg';
import lotmdonghua from '../assets/lotmdonghua.jpg';
import lotmmanhua from '../assets/lotmmanhua.jpeg';
import lotmgame from '../assets/lotmgame.jpeg';
import lotmcardgame from '../assets/lotmcardgame.jpeg';

function Midias() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Tudo');

  return (
    <section className={styles.SecaoMidias}>
      <div className={styles.CabecalhoSecao}>
        <h1 className={styles.TituloSecao}>Catálogo de Mídias</h1>
        <p className={styles.SubtituloSecao}>
          Livros, jogos e mídias reunidos em um só lugar.
        </p>

        <div className={styles.BarraFiltros}>
          <button
            type="button"
            onClick={() => setCategoriaSelecionada('Tudo')}
            className={
              categoriaSelecionada === 'Tudo' ? styles.BotaoFiltroAtivo : styles.BotaoFiltro
            }
          >
            Tudo
          </button>
          <button
            type="button"
            onClick={() => setCategoriaSelecionada('Livros')}
            className={
              categoriaSelecionada === 'Livros' ? styles.BotaoFiltroAtivo : styles.BotaoFiltro
            }
          >
            Livros
          </button>
          <button
            type="button"
            onClick={() => setCategoriaSelecionada('Jogos')}
            className={
              categoriaSelecionada === 'Jogos' ? styles.BotaoFiltroAtivo : styles.BotaoFiltro
            }
          >
            Jogos
          </button>
          <button
            type="button"
            onClick={() => setCategoriaSelecionada('Mídia')}
            className={
              categoriaSelecionada === 'Mídia' ? styles.BotaoFiltroAtivo : styles.BotaoFiltro
            }
          >
            Mídia
          </button>
        </div>
      </div>

      <div className={styles.GradeObras}>
        {(categoriaSelecionada === 'Tudo' || categoriaSelecionada === 'Livros') && (
          <CardObras
            titulo="Lord of Mysteries — Livro 1"
            categoria="Livros"
            extencao="Livro • 1432 capítulos • 8 volumes "
            sinopse="A origem de Lord of Mysteries foi sua Web Novel, que se extendeu por 1432 capítulos e 8 volumes. 
            Porém a obra se extendeu, na China se encontra atualmente com 18 volumes (divindido certos volumes da Web Novel em partes) 
            e falta mais um para seu termino. O livro físico também adicionou mais 5 capítulos secundários e imagens para o livro.
           A obra é ganhadora de diversos prêmios na China, sendo muito consagrada no país."
            capa={lotml1}
          />
        )}

        {(categoriaSelecionada === 'Tudo' || categoriaSelecionada === 'Livros') && (
          <CardObras
            titulo="Circle of Inevitability — Livro 2"
            categoria="Livros"
            extencao="Livro • Continuação • 1179 capítulos • 8 volumes"
            sinopse="O livro 2 também surgiu como Web Novel, se extendo por menos capítulos (1179 + a nota) e a mesma quantidade de volumes.
            Já na China, a obra atualmente tem 12 volumes físicos (também dividindo certos volumes da Web em partes) e falta uma quantidade
            indeterimanada para acabar, mas acredita-se ser por volta 3 a 5 volumes para acabar. Não houve adições de capítulos no livro 2, 
            mas ainda há imagens nos livros físicos. A obra também ganhou prêmios, porém ainda é menos popular que o livro 1."
            capa={lotml2}
          />
        )}

        {(categoriaSelecionada === 'Tudo' || categoriaSelecionada === 'Jogos') && (
          <CardObras
            titulo="Lord of Mysteries (MMORPG)"
            categoria="Jogos"
            extencao="Jogo • Digital • MMORPG "
            sinopse="O jogo MMORPG foi anunciado em 2023, mas o lançado em 2026, lançado apenas na China e estando em plataformas como PC, Android e 
            iOS. O jogo tem história própria e é de certa forma uma continuação do livro 1, estando entre as histórias de LotM e CoI, tendo
            personagens novos, mas também modos diferentes referente ao protagonista da obra central. Os desenvolvedores são a SPARK NEXA."
            capa={lotmgame}
          />
        )}

        {(categoriaSelecionada === 'Tudo' || categoriaSelecionada === 'Jogos') && (
          <CardObras
            titulo="Lord of Mysteries (Card Game)"
            categoria="Jogos"
            extencao="Jogo • Digital • Card Game "
            sinopse="O jogo foi dito como um jogo RPG de cartas, não se tem muita informação, mas foi anunciado em 2026. O jogo estará nas plataformas
            de PC, Android e iOS, os desenvolvedores são da Archosaur Games."
            capa={lotmcardgame}
          />
        )}

        {(categoriaSelecionada === 'Tudo' || categoriaSelecionada === 'Mídia') && (
          <CardObras
            titulo="Lord of Mysteries (Donghua)"
            categoria="Mídia"
            extencao="Mídia • Animação • 1 temporada • 13 episódios • 2 especiais"
            sinopse="O Donghua de LotM foi anunciado em 2021, porém a obra foi lançada em 2025, e os especiais em 2026, tendo previsão da Segunda
            Temporada pra 2027 e em torno de 40 episódios, a programação da obra prevê algumas temporadas a mais e até filmes, tendo também pontos 
            para a animação do Segundo Livro. O estúdio foi a B.CMay Picture, seu diretor sendo Ke Xiong e a produtora principal sendo a empresa 
            Tencent Penguin Pictures."
            capa={lotmdonghua}
          />
        )} 

        {(categoriaSelecionada === 'Tudo' || categoriaSelecionada === 'Mídia') && (
          <CardObras
            titulo="Lord of Mysteries (Manhua)"
            categoria="Mídia"
            extencao="Mídia • Quadrinhos • Em lançamento"
            sinopse="O manhua foi lançado em 2025, contedo menos de 30 capítulos com planejamento de término da obra. A editora na China é
            a Tencet Animation and Comics e somente tem versão digital da obra, nos EUA é publicado pela plataforma WebNovel e no Brasil pela
            Cultural Bridge. O artista principal tem seu pseudônimo como Yuanyuan de Qiqiu."
            capa={lotmmanhua}
          />
        )}
      </div>
    </section>
  );
}

export default Midias;