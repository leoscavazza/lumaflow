import { ArrowRight, CheckCircle2, Droplet, Heart, Waves } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  { icon: Droplet, title: 'Encha sua LumaFlow', text: 'Comece o dia com sua garrafa por perto. Um passo simples, sem metas impossíveis.' },
  { icon: Waves, title: 'Deixe os sinais ajudarem', text: 'O indicador visual lembra você de fazer uma pausa e tomar alguns goles.' },
  { icon: Heart, title: 'Crie consistência', text: 'Aos poucos, beber água vira parte natural do seu dia — no seu tempo.' }
];

export function HowItWorks() {
  return (
    <section className={styles.section} id="como-funciona">
      <div className={styles.visual}>
        <div className={styles.circleOne} /><div className={styles.circleTwo} />
        <div className={styles.note}><CheckCircle2 size={18}/><span>Um hábito possível<br/><strong>começa pequeno.</strong></span></div>
        <div className={styles.glass}>
          <div className={styles.glassTop} /><div className={styles.glassWater} />
          <div className={styles.glassMark}>L<br/><small>F</small></div>
          <div className={styles.glassHighlight} />
        </div>
        <div className={styles.drop}>✳</div>
        <span className={styles.caption}>REFRESQUE SUA ROTINA</span>
      </div>
      <div className={styles.content}>
        <span className={styles.kicker}>SIMPLES COMO DEVE SER</span>
        <h2>Um novo hábito.<br /><em>Três passos.</em></h2>
        <p className={styles.intro}>A LumaFlow foi pensada para apoiar sua rotina, não para virar mais uma tarefa na lista.</p>
        <div className={styles.steps}>
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div className={styles.step} key={title}>
              <div className={styles.stepIcon}><Icon size={19}/></div>
              <div><div className={styles.stepTitle}><span>0{index + 1}</span><h3>{title}</h3></div><p>{text}</p></div>
              {index < 2 && <ArrowRight className={styles.stepArrow} size={16}/>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}