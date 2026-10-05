const assets = [
  {
    title: 'Terreno com ruína em Loulé',
    type: 'Real Estate',
    value: '€350.000',
    description: 'Investimento em zona de elevada potencialidade, com boa acessibilidade e grande valor de desenvolvimento.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'PIP em aprovação para projeto de loteamento',
    type: 'Project',
    value: '€1.050.000',
    description: 'Projeto de loteamento com 16 moradias e tipologias T3 e T4, em planeamento estratégico.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Equestrian Property em Vila Franca de Xira',
    type: 'Off-market',
    value: '€2,2M',
    description: 'Propriedade premium com amplas áreas, valor patrimonial e forte potencial de posicionamento de mercado.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="page-shell">
        <div style={{ textAlign: 'center', marginBottom: 42 }}>
          <div className="eyebrow">Portfolio activo</div>
          <h2 className="section-title">Ativos selecionados da ELOS portfolio.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          {assets.map((item) => (
            <article key={item.title} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ height: 250, backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ padding: 24 }}>
                <div style={{ display: 'inline-block', padding: '8px 12px', borderRadius: 999, background: '#ecf8f2', color: '#0a7b49', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: 12 }}>{item.type}</div>
                <h3 style={{ margin: '0 0 10px', fontSize: '1.7rem', letterSpacing: '-0.05em', color: '#061d2f' }}>{item.title}</h3>
                <p style={{ color: 'rgba(6,29,47,0.75)', lineHeight: 1.7 }}>{item.description}</p>
                <div style={{ marginTop: 20, paddingTop: 12, borderTop: '1px solid rgba(6,29,47,0.08)', fontWeight: 800, fontSize: '1.5rem', color: '#061d2f' }}>{item.value}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
