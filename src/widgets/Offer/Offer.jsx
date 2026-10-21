import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { Button } from '../../shared/ui/Button.jsx';
import styles from './Offer.module.css';

const includes = ['Garrafa LumaFlow de 600 ml', 'Indicador visual de hidratação', 'Tampa de vedação prática', 'Guia digital de hábitos leves'];

export function Offer({ onJoin }) {
  return (
    <section className={styles.section} id="oferta">
      <div className={styles.offerCard}>
        <div className={styles.left}>
          <span className={styles.kicker}>SEU PRÓXIMO PEQUENO PASSO</span>
          <h2>Comece no seu<br/><em>próprio ritmo.</em></h2>
          <p>Uma companheira para os seus dias, criada para tornar o cuidado mais simples.</p>
          <div className={styles.price}><span>R$</span> 129<sup>,90</sup></div>
          <div className={styles.priceNote}>Preço fictício para demonstração acadêmica</div>
          <Button variant="lime" onClick={onJoin}>Quero entrar na lista <ArrowRight size={17}/></Button>
          <div className={styles.safe}><ShieldCheck size={16}/> Compra demonstrativa, sem cobrança</div>
        </div>
        <div className={styles.right}>
          <div className={styles.sticker}>UM BOM<br/>HÁBITO<br/><strong>COMEÇA AQUI</strong></div>
          <div className={styles.offerBottle}>
            <div className={styles.offerCap}/><div className={styles.offerNeck}/><div className={styles.offerBody}><span>⌁</span><strong>luma<br/>flow</strong><small>600 ML</small></div>
          </div>
          <div className={styles.included}>
            <h3>O que vem com você</h3>
            {includes.map(item => <div key={item}><span><Check size={13}/></span>{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}