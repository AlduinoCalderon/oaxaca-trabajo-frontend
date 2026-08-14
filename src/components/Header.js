'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <span>Gobierno del Estado de Oaxaca 2022-2028</span>
          <div className={styles.topBarLinks}>
            <a href="#">Accesibilidad</a>
            <a href="#">Contacto</a>
          </div>
        </div>
      </div>
      
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <Link href="/">
              <img 
                src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2023/12/trabajo.png" 
                alt="Secretaría del Trabajo" 
                className={styles.logo} 
              />
            </Link>
          </div>
          
          <div className={styles.desktopNav}>
            <nav className={styles.nav}>
              <Link href="/">Inicio</Link>
              <Link href="#">¿Quiénes Somos?</Link>
              <Link href="#">Trámites y Servicios</Link>
              <Link href="#">Transparencia</Link>
              <Link href="#">Noticias</Link>
              <Link href="#documentos">Información que debes saber</Link>
            </nav>
          </div>

          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>¿Quiénes Somos?</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>Trámites y Servicios</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>Transparencia</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>Noticias</Link>
          <Link href="#documentos" onClick={() => setIsMenuOpen(false)}>Información que debes saber</Link>
        </nav>
      </div>
    </>
  );
}
