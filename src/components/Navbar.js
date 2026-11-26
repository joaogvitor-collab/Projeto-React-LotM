import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.Cabecalho}>
      <span className={styles.Marca}>Lord of Mysteries</span>
      <nav className={styles.Menu}>
        <Link to="/" className={styles.ItemMenu}>Início</Link>
        <Link to="/midias" className={styles.ItemMenu}>Mídias</Link>
        <Link to="/sobre" className={styles.ItemMenu}>Sobre</Link>
      </nav>
    </header>
  );
}

export default Navbar;