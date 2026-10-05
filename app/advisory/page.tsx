import Header from '@/components/Header';
import Footer from '@/components/Footer';

const metrics = [
  { value: '16', label: 'projetos ativos' },
  { value: '€73,3M', label: 'valor em gestão' },
  { value: '1', label: 'estrutura de apoio' }
];

const pillars = [
  'Financiamento estratégico e aquisição',
  'Parceria para crescimento e expansão',
  'Estruturação de negócios e oportunidades',
  'Consultoria para empresas e investidores',
  'Apoio operacional e estratégico',
  'Abordagem customizada ao perfil de cada cliente'
];

export default function AdvisoryPage() {
  return (
    <main>
      <Header />

      <section style={{ background: 'linear-gradient(135deg, #061d2f 0%, #0d2944 100%)', color: '#fff', padding: '72px 0 48px' }}>
        <div className="page-shell" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 42, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: '#1bbf6c' }}>ELOS ADVISORY</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(3rem, 6vw, 7rem)', letterSpacing: '-0.08em', lineHeight: 0.9 }}>
              ADVISORY
            </h1>
            <p style={{ marginTop: 22, fontSize: '1.5rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.82)' }}>
              Segurança, estratégia e soluções para crescimento sustentável.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1bbf6c 0%, #f26722 100%)', borderRadius: 32, padding: 28 }}>
            <div style={{ background: 'rgba(6,29,47,0.9)', borderRadius: 24, padding: 28, color: '#fff' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1bbf6c', fontWeight: 800 }}>Gestão</div>
              <div style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.06em', margin: '16px 0' }}>€73,3M</div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                Prestamos acompanhamento a clientes corporativos e figuras públicas na identificação, seleção e negociação de empresas e negócios com foco em crescimento e criação de valor.
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
            <div className="eyebrow">Valorização estratégica</div>
            <h2 className="section-title">Apoio em situações de alto impacto e exigência.</h2>
            <p style={{ color: 'rgba(6,29,47,0.72)', fontSize: '1.12rem', lineHeight: 1.8 }}>
              Cada contexto exige uma abordagem própria. Por isso, analisamos necessidades, perfil de risco, operação e exigências específicas, procurando a solução mais adequada ao cliente. A nossa atuação combina estratégia, negociação, relacionamento e visão de longo prazo.
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

      <Footer />
    </main>
  );
}
