import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '../../shared/ui/Button.jsx';
import styles from './WaitlistModal.module.css';

export function WaitlistModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(document.activeElement);

  useEffect(() => {
    const modal = modalRef.current;
    const focusable = () => modal?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );

    focusable()?.[0]?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = Array.from(focusable() || []);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section ref={modalRef} className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
        <button className={styles.close} onClick={onClose} aria-label="Fechar janela"><X size={20}/></button>
        {!submitted ? <>
          <div className={styles.symbol}>⌁</div>
          <span className={styles.kicker}>UM PASSO DE CADA VEZ</span>
          <h2 id="modal-title">Entre na lista<br/><em>LumaFlow.</em></h2>
          <p id="modal-description">Deixe seus dados para simular seu interesse no produto. Nenhuma informação será enviada ou armazenada.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Seu nome</label><input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos te chamar?" required />
            <label htmlFor="email">Seu e-mail</label><input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@exemplo.com" required />
            <Button type="submit" variant="dark" className={styles.submit}>Quero entrar na lista ↗</Button>
          </form>
          <small>Protótipo acadêmico · formulário demonstrativo</small>
        </> : <div className={styles.success}>
          <CheckCircle2 size={46}/>
          <h2 id="modal-title">Tudo certo,<br/><em>{name.split(' ')[0]}!</em></h2>
          <p id="modal-description">Seu interesse foi simulado com sucesso. Como este é um protótipo client-side, seus dados não foram enviados nem salvos.</p>
          <Button variant="dark" onClick={onClose}>Voltar para a página</Button>
        </div>}
      </section>
    </div>
  );
}