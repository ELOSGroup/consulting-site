import Link from 'next/link';

const nav = [
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' }
];

export default function Header() {
  return (
    <header style={{ background: '#061d2f', color: '#fff', padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="page-shell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <div className="brand-mark" style={{ width: 72, height: 72, fontSize: '2rem', borderRadius: '50%' }}>∞</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.05em' }}>ELOS</span>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.14em', opacity: 0.8 }}>Group</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} style={{ color: '#f2f7fb', opacity: 0.9, fontWeight: 600, textDecoration: 'none' }}>
              {item.label}
            </Link>
          ))}
          <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Contacte-nos</a>
        </nav>
      </div>
    </header>
  );
}
