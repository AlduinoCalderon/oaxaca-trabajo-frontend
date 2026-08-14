import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          
          <div className={styles.col}>
            <img 
              src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/imagotipo-footer.svg" 
              alt="Gobierno del Estado de Oaxaca" 
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
            <h3>Procuraduría de la Defensa del Trabajo</h3>
            <p><strong>Atención al Público:</strong></p>
            <p>Calzada Porfirio Díaz 901, 1er nivel<br/>Col. Reforma, C.P. 68050<br/>Oaxaca de Juárez, Oax.</p>
            <p className={styles.phone}>Tel: 951 506 1885</p>
            <p className={styles.email}>prodet.setrao@oaxaca.gob.mx</p>
          </div>

          <div className={styles.col}>
            <h3>Síguenos</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}>FB</a>
              <a href="#" className={styles.icon}>TW</a>
              <a href="#" className={styles.icon}>IG</a>
            </div>
            <img 
              src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/tecnologias-solo-blanco.png" 
              alt="Tecnologías e Innovación" 
              className={styles.logoTech}
            />
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
