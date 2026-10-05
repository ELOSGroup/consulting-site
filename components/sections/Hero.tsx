export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #061d2f 0%, #0d2944 100%)', color: '#fff', padding: '72px 0 40px' }}>
      <div className="page-shell" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div className="eyebrow" style={{ color: '#1bbf6c' }}>Consultoria estratégica</div>
          <h1 style={{ margin: 0, fontSize: 'clamp(3rem, 6vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.07em' }}>
            ELOS <span style={{ display: 'block', opacity: 0.96 }}>GROUP</span>
          </h1>
          <p style={{ marginTop: 22, fontSize: 'clamp(1.1rem, 2vw, 1.7rem)', lineHeight: 1.4, color: 'rgba(255,255,255,0.82)' }}>
            A tranquilidade da ligação certa.
          </p>

          <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#services" className="btn-primary">Explorar serviços</a>
            <a href="#portfolio" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.22)', color: '#fff' }}>Portfolio activo</a>
          </div>

          <div style={{ marginTop: 34, display: 'flex', gap: 22, flexWrap: 'wrap' }}>
            <div style={{ minWidth: 190 }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>118</div>
              <div style={{ color: '#dfe8ee', opacity: 0.8 }}>ativos e projetos</div>
            </div>
            <div style={{ minWidth: 190 }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>€254.3M</div>
              <div style={{ color: '#dfe8ee', opacity: 0.8 }}>em carteira</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: 480 }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '32px',
            boxShadow: '0 26px 60px rgba(0,0,0,0.2)'
          }} />
          <div style={{
            position: 'absolute', inset: '8% 12% 8% 12%',
            border: '2px solid rgba(255,255,255,0.22)',
            borderRadius: '24px',
            display: 'flex', alignItems: 'end', justifyContent: 'center',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.36))'
          }}>
            <div style={{
              background: 'rgba(6,29,47,0.74)', borderRadius: 18, padding: '18px 22px',
              backdropFilter: 'blur(4px)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)',
              transform: 'translateY(18px)'
            }}>
              <div style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#1bbf6c', fontWeight: 800 }}>Real Estate</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, marginTop: 8 }}>Portfolio activo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
