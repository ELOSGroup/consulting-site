export default function About() {
  return (
    <section id="about" className="section" style={{ background: '#f7fafb' }}>
      <div className="page-shell" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 42, alignItems: 'center' }}>
        <div>
          <div className="eyebrow">Sobre a ELOS Group</div>
          <h2 className="section-title">Estratégia, credibilidade e visão de longo prazo.</h2>
          <p style={{ color: 'rgba(6,29,47,0.75)', fontSize: '1.12rem', lineHeight: 1.8, margin: 0 }}>
            A ELOS Group nasceu para criar ligações estratégicas entre oportunidade, conhecimento e execução. Através das suas áreas de atuação, ajuda empresas, investidores e clientes a identificar oportunidades, avaliar riscos e transformar desafios em resultados concretos.
          </p>
        </div>

        <div className="card" style={{ padding: 30, background: 'linear-gradient(135deg, #061d2f 0%, #112f46 100%)', color: '#fff' }}>
          <div style={{ fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1bbf6c', fontSize: '0.82rem', marginBottom: 12 }}>Fundador & CEO</div>
          <h3 style={{ fontSize: '2rem', letterSpacing: '-0.06em', margin: '0 0 6px' }}>Sérgio Brandão Soares</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Consultoria estratégica e gestão de ativos</p>

          <div style={{ marginTop: 26, display: 'grid', gap: 14 }}>
            <div><strong>Email:</strong> info.elosgroup@proton.me</div>
            <div><strong>Telefone:</strong> +351 925 697 211</div>
            <div><strong>Especialização:</strong> gestão, consultoria e investimento</div>
          </div>
        </div>
      </div>
    </section>
  );
}
