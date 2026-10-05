import Header from '@/components/Header';
import Footer from '@/components/Footer';

const metrics = [
  { value: '86', label: 'ativos em carteira' },
  { value: '€43,4M', label: 'valor total' },
  { value: '5', label: 'áreas de valor' }
];

const pillars = [
  'Aquisição e venda de ativos',
  'Valuation e due diligence',
  'Estratégia de investimento',
  'Gestão de carteira e desenvolvimento',
  'Parcerias com investidores e promotores',
  'Análise de mercado e oportunidades'
];

const assetExamples = [
  {
    title: 'Terreno com ruína em Loulé',
    value: '€350.000',
    description: 'Oportunidade com forte potencial de valorização numa zona com boa acessibilidade e grande valor de desenvolvimento.'
  },
  {
    title: 'PIP para loteamento em aprovação',
    value: '€1.050.000',
    description: 'Projeto com 16 moradias e tipologias T3 e T4, com visão estratégica de execução e valorização.'
  },
  {
    title: 'Equestrian Property em Vila Franca de Xira',
    value: '€2,2M',
    description: 'Imóvel premium e off-market com elevado valor patrimonial e potencial de posicionamento no mercado.'
  }
];

export default function RealEstatePage() {
  return (
    <main>
      <Header />

      <section style={{ background: 'linear-gradient(135deg, #061d2f 0%, #0d2944 100%)', color: '#fff', padding: '72px 0 48px' }}>
        <div className="page-shell" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 42, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: '#1bbf6c' }}>ELOS REAL ESTATE &amp; VALUATION</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(3rem, 6vw, 7rem)', letterSpacing: '-0.08em', lineHeight: 0.9 }}>
              REAL ESTATE <span style={{ display: 'block' }}>&amp; VALUATION</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: '1.45rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.82)' }}>
              Inteligência e estratégia no mercado imobiliário.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1bbf6c 0%, #f26722 100%)', borderRadius: 32, padding: 28, boxShadow: '0 22px 40px rgba(0,0,0,0.18)' }}>
            <div style={{ background: 'rgba(6,29,47,0.9)', borderRadius: 28, padding: 28, color: '#fff' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1bbf6c', fontWeight: 800 }}>Ativos</div>
              <div style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.06em', margin: '16px 0' }}>€43,4M</div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                A nossa abordagem combina análise, visão estratégica e conhecimento de mercado para identificar oportunidades e maximizar o potencial de cada ativo.
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
            <div className="eyebrow">Como atuamos</div>
            <h2 className="section-title">Acompanhamos investidores, promotores e fundos de investimento.</h2>
            <p style={{ color: 'rgba(6,29,47,0.72)', fontSize: '1.12rem', lineHeight: 1.8 }}>
              Atuamos diretamente com investidores, promotores, fundos de investimento e agentes de execução, acompanhando processos de aquisição, gestão e alienação de ativos imobiliários. A nossa abordagem combina análise, visão estratégica e conhecimento de mercado, procurando identificar oportunidades e maximizar o potencial de cada ativo.
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

      <section className="section" style={{ background: '#eef5f8' }}>
        <div className="page-shell">
          <div style={{ textAlign: 'center', marginBottom: 42 }}>
            <div className="eyebrow">Portfolio activo</div>
            <h2 className="section-title">Exemplos de ativos em carteira.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {assetExamples.map((item) => (
              <div key={item.title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: 220, background: 'linear-gradient(135deg, rgba(27,191,108,0.8), rgba(242,103,34,0.7))' }} />
                <div style={{ padding: 22 }}>
                  <div style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1bbf6c', fontWeight: 800, marginBottom: 8 }}>Asset</div>
                  <h3 style={{ margin: '0 0 10px', fontSize: '1.8rem', letterSpacing: '-0.05em', color: '#061d2f' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(6,29,47,0.7)', lineHeight: 1.7 }}>{item.description}</p>
                  <div style={{ marginTop: 20, fontSize: '1.6rem', fontWeight: 800, color: '#061d2f' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
