import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          
          <div className={styles.col}>
            <img 
              src="/icon.png" 
              alt="Secretaría del Trabajo" 
              className={styles.logoFooter}
            />
          </div>

          <div className={styles.col}>
            <h3>Secretaría del Trabajo</h3>
            <ul>
              <li><a href="#">Misión, Visión y Objetivos</a></li>
              <li><a href="#">Funciones</a></li>
              <li><a href="#">Directorio</a></li>
              <li><a href="#">Transparencia</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Secretaría del Trabajo</h3>
            <p><strong>Contacto y Atención:</strong></p>
            <p>Calzada Porfirio Díaz 901, 1er nivel<br/>Col. Reforma, C.P. 68050<br/>Oaxaca de Juárez, Oax.</p>
            <p className={styles.phone}>Tel: (951) 506 1884</p>
            <p className={styles.email}>secretaria.trabajo@oaxaca.gob.mx</p>
          </div>

          <div className={styles.col}>
            <h3>Síguenos</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/SecretariaTrabajoOax" target="_blank" rel="noopener noreferrer" className={styles.icon}>FB</a>
              <a href="https://x.com/Trabajo_GobOax" target="_blank" rel="noopener noreferrer" className={styles.icon}>X</a>
              <a href="https://www.instagram.com/secretariatrabajooax" target="_blank" rel="noopener noreferrer" className={styles.icon}>IG</a>
            </div>
          </div>
          
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Gobierno del Estado de Oaxaca. Todos los derechos reservados.</p>
          <div className={styles.links}>
            <a href="#">Aviso de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
