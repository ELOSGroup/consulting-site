const services = [
  {
    title: 'Real Estate & Valuation',
    description: 'Estratégia imobiliária, avaliação de ativos e gestão de oportunidades de investimento.',
    accent: '#1bbf6c',
    icon: '🏠'
  },
  {
    title: 'Energy',
    description: 'Soluções energéticas para empresas e projetos com foco em eficiência e sustentabilidade.',
    accent: '#f26722',
    icon: '⚡'
  },
  {
    title: 'Advisory',
    description: 'Consultoria estratégica, apoio operacional e desenvolvimento de negócios para crescimento sustentável.',
    accent: '#061d2f',
    icon: '🤝'
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="page-shell">
        <div style={{ textAlign: 'center', marginBottom: 42 }}>
          <div className="eyebrow">Áreas de atuação</div>
          <h2 className="section-title">Soluções que conectam estratégia e oportunidade.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
          {services.map((service) => (
            <div key={service.title} className="card" style={{ padding: 28, borderTop: `4px solid ${service.accent}` }}>
              <div style={{ width: 74, height: 74, borderRadius: '50%', background: '#f2f7fb', display: 'grid', placeItems: 'center', fontSize: '2rem', marginBottom: 22 }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '2rem', letterSpacing: '-0.06em', margin: '0 0 14px', color: '#061d2f' }}>{service.title}</h3>
              <p style={{ margin: 0, lineHeight: 1.7, fontSize: '1.02rem', color: 'rgba(6,29,47,0.75)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
