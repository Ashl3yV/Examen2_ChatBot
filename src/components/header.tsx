import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleInicioLinkClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <header className="header">
      
      <div className="logo" >
        <img  src="/img/Ash.jpg" alt="foto"/>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#" onClick={handleInicioLinkClick}>Inicio</a></li>
          <li><Link href="/about">Acerca de</Link></li>
          <li><Link href="/callToAction">Contáctenos</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;