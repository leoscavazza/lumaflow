import { useState } from 'react';
import { Header } from '../widgets/Header/Header.jsx';
import { Hero } from '../widgets/Hero/Hero.jsx';
import { Benefits } from '../widgets/Benefits/Benefits.jsx';
import { HowItWorks } from '../widgets/HowItWorks/HowItWorks.jsx';
import { Reviews } from '../widgets/Reviews/Reviews.jsx';
import { Offer } from '../widgets/Offer/Offer.jsx';
import { FAQ } from '../widgets/FAQ/FAQ.jsx';
import { Footer } from '../widgets/Footer/Footer.jsx';
import { WaitlistModal } from '../features/join-waitlist/WaitlistModal.jsx';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <a className="skipLink" href="#conteudo-principal">Pular para o conteúdo</a>
      <Header onJoin={() => setModalOpen(true)} />
      <main id="conteudo-principal">
        <Hero onJoin={() => setModalOpen(true)} />
        <Benefits />
        <HowItWorks />
        <Reviews />
        <Offer onJoin={() => setModalOpen(true)} />
        <FAQ />
      </main>
      <Footer onJoin={() => setModalOpen(true)} />
      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}
    </>
  );
}