import Header from '@/components/Header';
import Footer from '@/components/Footer';

const metrics = [
  { value: '16', label: 'projetos solares' },
  { value: '€138,6M', label: 'valor em carteira' },
  { value: '100%', label: 'foco em eficiência' }
];

const pillars = [
  'Análise de consumo e necessidades energéticas',
  'Consultoria de eficiência e otimização',
  'Implementação de projetos solares',
  'Planeamento e revisão de estratégia energética',
  'Apoio ao desenvolvimento de projetos de energia',
  'Suporte à tomada de decisão com visão de longo prazo'
];

export default function EnergyPage() {
  return (
    <main>
      <Header />

      <section style={{ background: 'linear-gradient(135deg, #061d2f 0%, #0d2944 100%)', color: '#fff', padding: '72px 0 48px' }}>
        <div className="page-shell" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 42, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: '#1bbf6c' }}>ELOS ENERGY</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(3rem, 6vw, 7rem)', letterSpacing: '-0.08em', lineHeight: 0.9 }}>
              ENERGY
            </h1>
            <p style={{ marginTop: 22, fontSize: '1.5rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.82)' }}>
              Soluções energéticas para o segmento empresarial.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1bbf6c 0%, #f26722 100%)', borderRadius: 32, padding: 28 }}>
            <div style={{ background: 'rgba(6,29,47,0.9)', borderRadius: 24, padding: 28, color: '#fff' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1bbf6c', fontWeight: 800 }}>Portfolio</div>
              <div style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.06em', margin: '16px 0' }}>€138,6M</div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                Trabalhamos diretamente com empresas, avaliando soluções energéticas adequadas à realidade operacional e aos objetivos de eficiência e sustentabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f7f8' }}>
        <div className="page-shell">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 24 }}>
            {metrics.map((metric) => (
              <div key={metric.label} className="card" style={{ padding: '30px 24px', borderTop: '4px solid #1bbf6c' }}>
                <div style={{ fontSize: '2.7rem', fontWeight: 800, letterSpacing: '-0.06em', color: '#061d2f' }}>{metric.value}</div>
                <div style={{ color: 'rgba(6,29,47,0.76)', marginTop: 10 }}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Energia de valor</div>
            <h2 className="section-title">A ELOS Energy apoia decisões mais inteligentes e sustentáveis.</h2>
            <p style={{ color: 'rgba(6,29,47,0.72)', fontSize: '1.12rem', lineHeight: 1.8 }}>
              Atuamos no mercado B2B, em representação da EDP Empresas e outras soluções energéticas relevantes, trabalhando diretamente com empresas para perceber perfis, necessidades e oportunidades de redução de custos e otimização operacional.
            </p>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 18 }}>
              {pillars.map((item) => (
                <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'center', color: '#061d2f', fontWeight: 600 }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'linear-gradient(90deg, #1bbf6c, #f26722)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(180deg, #f7fafb 0%, #eef5f8 100%)' }}>
        <div className="page-shell">
          <div className="card" style={{ padding: '44px 32px', background: 'linear-gradient(135deg, #061d2f 0%, #0f2c45 100%)', color: '#fff' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="eyebrow" style={{ color: '#1bbf6c' }}>Contacte-nos</div>
              <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.06em' }}>Quer otimizar a sua estratégia energética?</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 18, marginTop: 28 }}>
              <a href="mailto:info.elosgroup@proton.me" className="btn-primary">info.elosgroup@proton.me</a>
              <a href="tel:+351925697211" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.22)', color: '#fff' }}>+351 925 697 211</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
