export default function CTA() {
  return (
    <section id="contact" className="section" style={{ background: '#061d2f', color: '#fff' }}>
      <div className="page-shell">
        <div className="card" style={{ background: 'linear-gradient(135deg, #0d2b44 0%, #061d2f 100%)', color: '#fff', padding: '48px 32px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="eyebrow" style={{ color: '#1bbf6c' }}>Vamos falar</div>
            <h2 style={{ margin: 0, fontSize: 'clamp(2.2rem, 4vw, 4rem)', letterSpacing: '-0.06em' }}>Pronto para crescer com estratégia?</h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 18 }}>
            <a href="mailto:info.elosgroup@proton.me" className="btn-primary">info.elosgroup@proton.me</a>
            <a href="tel:+351925697211" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.22)', color: '#fff' }}>+351 925 697 211</a>
          </div>
        </div>
      </div>
    </section>
  );
}
