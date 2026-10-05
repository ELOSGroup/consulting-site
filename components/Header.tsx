import Link from 'next/link';

const nav = [
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' }
];

export default function Header() {
  return (
    <header style={{ background: '#061d2f', color: '#fff', padding: '20px 0' }}>
      <div className="page-shell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="brand-mark" style={{ width: 72, height: 72, fontSize: '2rem' }}>∞</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.05em' }}>ELOS</span>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.14em', opacity: 0.8 }}>Group</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} style={{ color: '#f2f7fb', opacity: 0.9, fontWeight: 600 }}>
              {item.label}
            </Link>
          ))}
          <a href="#contact" className="btn-primary">Contacte-nos</a>
        </nav>
      </div>
    </header>
  );
}
