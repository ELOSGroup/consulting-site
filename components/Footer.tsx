export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#061d2f', color: '#f3f7fb', padding: '64px 0 40px' }}>
      <div className="page-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
          <div>
            <div className="brand-mark" style={{ width: 72, height: 72, fontSize: '2rem' }}>∞</div>
            <h3 style={{ marginTop: 16, fontSize: '1.6rem', letterSpacing: '-0.05em' }}>ELOS Group</h3>
            <p style={{ opacity: 0.8, marginTop: 8 }}>A tranquilidade da ligação certa.</p>
          </div>

          <div>
            <h4 style={{ marginBottom: 18, fontSize: '1.1rem' }}>Contacto</h4>
            <p style={{ margin: '8px 0' }}>info.elosgroup@proton.me</p>
            <p style={{ margin: '8px 0' }}>+351 925 697 211</p>
          </div>

          <div>
            <h4 style={{ marginBottom: 18, fontSize: '1.1rem' }}>Navegação</h4>
            <p style={{ margin: '8px 0' }}><a href="#about">Sobre</a></p>
            <p style={{ margin: '8px 0' }}><a href="#services">Serviços</a></p>
            <p style={{ margin: '8px 0' }}><a href="#portfolio">Portfolio</a></p>
          </div>

          <div>
            <h4 style={{ marginBottom: 18, fontSize: '1.1rem' }}>Direção</h4>
            <p style={{ margin: '8px 0' }}>Sérgio Brandão Soares</p>
            <p style={{ margin: '8px 0' }}>Founder & CEO</p>
          </div>
        </div>

        <div style={{ marginTop: 40, height: 1, background: 'rgba(255,255,255,0.12)' }} />
        <p style={{ textAlign: 'center', opacity: 0.6, marginTop: 20 }}>© 2026 ELOS Group. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
