import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import KPIs from '@/components/sections/KPIs';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <KPIs />
      <Services />
      <About />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
