import fotoAutor from '../assets/cuttlefish.png';
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.PaginaSobre}>
      <h1 className={styles.TituloSobre}>Sobre o Autor e a História</h1>

      <div className={styles.PerfilAutor}>
        <img
          src={fotoAutor}
          alt="Cuttlefish That Loves Diving"
          className={styles.FotoAutor}
        />

        <div className={styles.HistoriaBloco}>
          <h2 className={styles.SubtituloAutor}>Cuttlefish That Loves Diving</h2>
          <p className={styles.TextoSobre}>
            Yuan Ye, conhecido como Cuttlefish That Loves Diving é o escritor de Lord of Mysteries.
            Ainda como editor, decidiu a passar escrever uma novel, sua primeira obra sendo
            Record of Extinction Destiny, em 2011, e depois de focar na carreira de escritor, 
            lançou  Throne of Magical Arcana em 2013. Passou a lançar outras obras até enfim chegar em 
            Lord of Mysteries, em 2018, sua obra de maior sucesso e uma das maiores dentro da China, ganhando prêmios e afins,
            seu términdo sendo em 2020. Lord of Mysteries teve sua continuação em 2023, e término em 2025. Além de tudo,
            a obra ganhou espaço no ramo das animações, jogos e quadrinhos. Atualmente o autor continua a escrever novels, focando
            na sua atual novel, Radiant Blade of the Wilderness.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;