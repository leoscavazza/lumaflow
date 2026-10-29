import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const questions = [
  { q: 'A LumaFlow é uma garrafa inteligente de verdade?', a: 'Neste projeto acadêmico, a LumaFlow é um conceito fictício. A página simula a apresentação de um produto e não representa uma oferta comercial real.' },
  { q: 'Como funciona o indicador visual?', a: 'A proposta é usar sinais visuais simples para lembrar você de beber água ao longo do dia. O protótipo representa essa ideia visualmente, sem sensores eletrônicos reais.' },
  { q: 'Qual é a capacidade da garrafa?', a: 'A versão conceitual apresentada tem capacidade de 600 ml e foi pensada para acompanhar estudos, trabalho e atividades leves.' },
  { q: 'O botão de compra realiza uma cobrança?', a: 'Não. Ao clicar no botão, você pode simular seu interesse preenchendo um formulário demonstrativo. Nenhum pagamento ou cadastro real é realizado.' },
  { q: 'Posso usar a LumaFlow no meu ritmo?', a: 'Essa é justamente a ideia: incentivar pausas e constância sem transformar hidratação em competição ou obrigação.' }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className={styles.section} id="faq">
      <div className={styles.intro}><span className={styles.kicker}>TUDO CLARO?</span><h2>Ficou com<br/><em>alguma dúvida?</em></h2><p>Respondemos o que você precisa saber sobre a ideia LumaFlow.</p></div>
      <div className={styles.list}>
        {questions.map((item, index) => <article className={`${styles.item} ${openIndex === index ? styles.active : ''}`} key={item.q}>
          <button id={`faq-question-${index}`} className={styles.question} type="button" aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(openIndex === index ? -1 : index)} aria-expanded={openIndex === index}>
            <span>{item.q}</span><span className={styles.chevron}><ChevronDown size={18}/></span>
          </button>
          <p id={`faq-answer-${index}`} className={styles.answer} role="region" aria-labelledby={`faq-question-${index}`} hidden={openIndex !== index}>{item.a}</p>
        </article>)}
      </div>
    </section>
  );
}