import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../shared/ui/Button.jsx';
import styles from './Header.module.css';

export function Header({ onJoin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#inicio" aria-label="LumaFlow, início" onClick={closeMenu}>
        <span className={styles.logoMark}><span /></span><span>luma<span className={styles.brandLight}>flow</span></span>
      </a>
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <a href="#beneficios" onClick={closeMenu}>Benefícios</a>
        <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
        <a href="#avaliacoes" onClick={closeMenu}>Avaliações</a>
        <Button variant="dark" onClick={() => { closeMenu(); onJoin(); }}>Quero a minha <ArrowUpRight size={16} /></Button>
      </nav>
    </header>
  );
}