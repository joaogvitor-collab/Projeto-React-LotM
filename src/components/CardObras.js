import styles from './CardObras.module.css';

function CardObras({ titulo, categoria, extencao, sinopse, capa }) {
  return (
    <article className={styles.CardObra}>
      <div className={styles.TopoCard}>
        <span className={styles.Categoria}>{categoria}</span>
        <h2 className={styles.Titulo}>{titulo}</h2>
        <span className={styles.Extencao}>{extencao}</span>
      </div>

      <div className={styles.ConteudoLateral}>
        <img src={capa} alt={titulo} className={styles.CapaObra} />
        <p className={styles.Sinopse}>{sinopse}</p>
      </div>
    </article>
  );
}

export default CardObras;