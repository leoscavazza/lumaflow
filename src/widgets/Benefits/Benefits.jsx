import { Droplets, Leaf, Smartphone, Sparkles } from 'lucide-react';
import styles from './Benefits.module.css';

const benefits = [
  { icon: Droplets, number: '01', title: 'Lembretes gentis', text: 'Sinais visuais ajudam você a lembrar de beber água, sem alarmes insistentes.' },
  { icon: Smartphone, number: '02', title: 'Sem complicar', text: 'Uma experiência simples para encaixar a hidratação na sua rotina real.' },
  { icon: Leaf, number: '03', title: 'Feita para durar', text: 'Design reutilizável para acompanhar seus dias, da mesa ao treino.' },
  { icon: Sparkles, number: '04', title: 'Seu próprio ritmo', text: 'Não é sobre competir. É sobre construir um hábito que faça sentido para você.' }
];

export function Benefits() {
  return (
    <section className={styles.section} id="beneficios">
      <div className={styles.heading}>
        <span className={styles.kicker}>MENOS ESFORÇO, MAIS CONSTÂNCIA</span>
        <h2>O cuidado que cabe<br />na sua <em>rotina.</em></h2>
        <p>Pequenas escolhas ficam mais fáceis quando o design trabalha a seu favor.</p>
      </div>
      <div className={styles.grid}>
        {benefits.map(({ icon: Icon, number, title, text }) => (
          <article className={styles.card} key={number}>
            <div className={styles.cardTop}><span className={styles.icon}><Icon size={22} strokeWidth={1.7} /></span><span className={styles.number}>{number}</span></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}