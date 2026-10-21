import { Star } from 'lucide-react';
import styles from './Reviews.module.css';

const reviews = [
  { initials: 'LM', name: 'Luiza M.', detail: 'Estudante e corredora', quote: 'Eu sempre esquecia a garrafa na mochila. Agora ela fica na minha mesa e me ajuda a lembrar de fazer pausas.' , color: 'rose' },
  { initials: 'RC', name: 'Rafael C.', detail: 'Designer', quote: 'Gostei porque não parece um aplicativo cobrando produtividade. É simples, bonita e combina com meu dia.', color: 'sage' },
  { initials: 'BA', name: 'Beatriz A.', detail: 'Rotina híbrida', quote: 'O que mais funciona pra mim é o lembrete visual. Pequenos detalhes fazem a gente prestar mais atenção.', color: 'lilac' }
];

export function Reviews() {
  return (
    <section className={styles.section} id="avaliacoes">
      <div className={styles.top}>
        <div><span className={styles.kicker}>GENTE DE VERDADE, ROTINAS REAIS*</span><h2>Pequenos goles.<br/><em>Boas mudanças.</em></h2></div>
        <div className={styles.rating}><div className={styles.stars}><Star/><Star/><Star/><Star/><Star/></div><strong>4,9 <small>/ 5</small></strong><span>Experiência ilustrativa</span></div>
      </div>
      <div className={styles.cards}>
        {reviews.map((review) => <article className={styles.card} key={review.initials}>
          <div className={styles.stars}><Star/><Star/><Star/><Star/><Star/></div>
          <p className={styles.quote}>“{review.quote}”</p>
          <div className={styles.person}><div className={`${styles.avatar} ${styles[review.color]}`}>{review.initials}</div><div><strong>{review.name}</strong><span>{review.detail}</span></div><span className={styles.verified}>✓</span></div>
        </article>)}
      </div>
      <p className={styles.disclaimer}>*Depoimentos fictícios criados exclusivamente para fins acadêmicos.</p>
    </section>
  );
}