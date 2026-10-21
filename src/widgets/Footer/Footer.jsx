import { ArrowUpRight } from 'lucide-react';
import { Button } from '../../shared/ui/Button.jsx';
import styles from './Footer.module.css';

export function Footer({ onJoin }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <a className={styles.brand} href="#inicio"><span className={styles.mark}>⌁</span>luma<span>flow</span></a>
        <p>Um gole de cada vez.<br/>Um hábito de cada vez.</p>
        <Button variant="light" onClick={onJoin}>Entrar na lista <ArrowUpRight size={16}/></Button>
      </div>
      <div className={styles.bottom}><span>© 2026 LumaFlow · Produto fictício acadêmico</span><div><a href="#beneficios">Benefícios</a><a href="#faq">FAQ</a><a href="#inicio">Voltar ao topo ↑</a></div></div>
    </footer>
  );
}