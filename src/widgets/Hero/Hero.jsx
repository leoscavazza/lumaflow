import { ArrowDown, ArrowRight, Check, Star } from 'lucide-react';
import { Button } from '../../shared/ui/Button.jsx';
import styles from './Hero.module.css';

export function Hero({ onJoin }) {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.copy}>
        <div className={styles.eyebrow}><span className={styles.pulse} /> CONHEÇA SEU NOVO RITUAL</div>
        <h1>Seu ritmo.<br />Sua <span>hidratação.</span></h1>
        <p className={styles.description}>Uma garrafa inteligente que transforma pequenos goles em um hábito que acompanha a sua vida — sem pressão, sem complicação.</p>
        <div className={styles.actions}>
          <Button variant="dark" onClick={onJoin}>Quero conhecer <ArrowRight size={17} /></Button>
          <a href="#como-funciona" className={styles.textLink}>Descubra como funciona <ArrowDown size={15} /></a>
        </div>
        <div className={styles.socialProof}>
          <div className={styles.avatars}><span>J</span><span>M</span><span>A</span><span>+</span></div>
          <div><div className={styles.stars}><Star /><Star /><Star /><Star /><Star /></div><p><strong>4,9/5</strong> na experiência de hidratação*</p></div>
        </div>
        <small className={styles.disclaimer}>*Avaliações demonstrativas para este protótipo acadêmico.</small>
      </div>
      <div className={styles.visual}>
        <div className={styles.sunShape} />
        <div className={styles.verticalLabel}>HYDRATE AT YOUR OWN PACE</div>
        <div className={styles.productStage}>
          <div className={styles.sparkle}>✳</div>
          <div className={styles.bottleShadow} />
          <div className={styles.bottle}>
            <div className={styles.cap}><span /></div>
            <div className={styles.bottleNeck} />
            <div className={styles.bottleBody}>
              <div className={styles.bottleShine} />
              <div className={styles.bottleLogo}><span className={styles.logoLeaf}>⌁</span><span>luma<br/>flow</span></div>
              <div className={styles.waterLine} />
              <div className={styles.waterMark}>600 <small>ML</small></div>
              <div className={styles.bottleBase} />
            </div>
          </div>
          <div className={styles.floatingCard}><span className={styles.checkCircle}><Check size={15}/></span><div><strong>Você está no seu ritmo!</strong><small>Mais um gole concluído</small></div><span className={styles.cardDot}>↗</span></div>
          <div className={styles.floatingTag}><span>☼</span> Um hábito de cada vez</div>
        </div>
        <div className={styles.bottomNote}><span>01 / 03</span><span>Feita para acompanhar você</span></div>
      </div>
    </section>
  );
}