const stats = [
  { value: '86', label: 'ativos imobiliários', detail: '€43,4M em carteira' },
  { value: '16', label: 'projetos advisory', detail: '€73,3M em carteira' },
  { value: '16', label: 'projetos solares', detail: '€138,6M em carteira' }
];

export default function KPIs() {
  return (
    <section className="section" style={{ background: '#eef5f8' }}>
      <div className="page-shell">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow">Performance</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}>Números que demonstram visão.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 26 }}>
          {stats.map((item, index) => (
            <div key={index} className="card" style={{ padding: '32px 28px', borderTop: '4px solid #1bbf6c' }}>
              <div style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 800, letterSpacing: '-0.06em', marginBottom: 8, color: '#061d2f' }}>{item.value}</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#061d2f', marginBottom: 8 }}>{item.label}</div>
              <div style={{ fontSize: '0.98rem', color: 'rgba(6,29,47,0.7)' }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
