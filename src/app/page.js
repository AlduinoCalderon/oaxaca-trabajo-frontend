import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      
      {/* Hero Banner Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className="fade-in">Secretaría del Trabajo</h1>
            <p className="fade-in" style={{animationDelay: '0.2s'}}>Gobierno del Estado de Oaxaca 2022 - 2028</p>
            <div className={styles.heroActions}>
              <Link href="#documentos" className={`btn-primary fade-in`} style={{animationDelay: '0.4s'}}>
                Ver Información que debes saber
              </Link>
            </div>
          </div>
        </div>
        <img 
          src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2026/08/portada-mixteca.jpg" 
          alt="Gobernador" 
          className={styles.heroBg} 
        />
      </section>

      {/* 1. Trámites y Servicios */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Trámites y Servicios</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/tramites-home/icono_tramites.png" alt="Procuraduría" />
            </div>
            <h3>Procuraduría de la Defensa del Trabajo</h3>
            <p>Defensa de tus derechos laborales</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
              <Link href="/citas" style={{ fontSize: '0.85rem', background: '#005a87', color: 'white', padding: '8px 12px', borderRadius: '5px', textAlign: 'center', textDecoration: 'none' }}>
                📅 Agenda tu cita
              </Link>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/tramites-home/icono_servicios.png" alt="Inspección" />
            </div>
            <h3>Inspección del trabajo</h3>
            <p>Servicios para empleadores y permisos de trabajo para adolescentes en edad permitida</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
              <Link href="/tramites/permiso-menores" className={styles.serviceLink} style={{ alignSelf: 'flex-start' }}>
                Ver trámite →
              </Link>
              <Link href="/citas" style={{ fontSize: '0.85rem', background: '#005a87', color: 'white', padding: '8px 12px', borderRadius: '5px', textAlign: 'center', textDecoration: 'none' }}>
                📅 Agenda para empleadores o tutores de adolescentes en edad permitida de trabajo
              </Link>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/icono-contacto.png" alt="Empleo" />
            </div>
            <h3>Fomento al empleo</h3>
            <p>acciones de promoción del trabajo digno</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
              <Link href="#" style={{ fontSize: '0.85rem', background: '#005a87', color: 'white', padding: '8px 12px', borderRadius: '5px', textAlign: 'center', textDecoration: 'none' }}>
                🚀 Inclusión al empleo
              </Link>
              <Link href="#" style={{ fontSize: '0.85rem', background: '#005a87', color: 'white', padding: '8px 12px', borderRadius: '5px', textAlign: 'center', textDecoration: 'none' }}>
                🏢 Fomento Laboral Penitenciario
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Últimas Noticias */}
      <section className={styles.newsSection}>
        <div className={styles.sectionHeader}>
          <h2>Últimas Noticias</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.newsGrid}>
          <div className={styles.newsCard}>
            <div className={styles.newsImage}>
              <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2026/07/vial-amp.jpg" alt="Noticia 1" />
            </div>
            <div className={styles.newsContent}>
              <span className={styles.newsDate}>25 Julio, 2026</span>
              <h3>Avances en Conciliación Laboral</h3>
              <p>Más del 80% de los conflictos laborales se resuelven a través del diálogo y la conciliación en Oaxaca.</p>
              <a href="#" className={styles.readMore}>Leer nota completa</a>
            </div>
          </div>
          <div className={styles.newsCard}>
            <div className={styles.newsImage}>
              <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2026/07/tu-vida.jpg" alt="Noticia 2" />
            </div>
            <div className={styles.newsContent}>
              <span className={styles.newsDate}>20 Julio, 2026</span>
              <h3>Programa Tu Vida</h3>
              <p>Conoce los nuevos incentivos y programas de desarrollo laboral para la juventud oaxaqueña.</p>
              <a href="#" className={styles.readMore}>Leer nota completa</a>
            </div>
          </div>
        </div>
        
        <div className={styles.viewAllNews}>
          <a href="#" className="btn-secondary">Ver todas las noticias</a>
        </div>
      </section>

      {/* 3. Información que debes saber */}
      <section id="documentos" className={styles.documentosSection}>
        <div className={styles.sectionHeader}>
          <h2>Información que debes saber</h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.documentosGrid}>
          <a href="/documentos/Memorandum_Entendimiento_Inspeccion.pdf" target="_blank" rel="noopener noreferrer" className={styles.documentoCard}>
            <div className={styles.documentoIcon}>📄</div>
            <div className={styles.documentoInfo}>
              <h3>Memorándum de Entendimiento</h3>
              <p>Dirección de Inspección (Versión Final)</p>
            </div>
            <span className={styles.downloadBtn}>Descargar PDF</span>
          </a>
          <a href="/documento-ruta-trabajo-infantil.pdf" target="_blank" rel="noopener noreferrer" className={styles.documentoCard}>
            <div className={styles.documentoIcon}>📄</div>
            <div className={styles.documentoInfo}>
              <h3>Ruta de Identificación y Atención</h3>
              <p>Casos de Trabajo Infantil en el Estado de Oaxaca</p>
            </div>
            <span className={styles.downloadBtn}>Descargar PDF</span>
          </a>
        </div>
      </section>

      {/* 4. Convocatorias */}
      <section className={styles.convocatoriasSection}>
        <div className={styles.sectionHeader}>
          <h2>Convocatorias</h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.bannersGrid}>
          <Link href="/ruta" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
            <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2026/08/banners-RUTA.jpg" alt="Ruta" className={styles.bannerImg} style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#005a87' }}>Ruta de Trabajo Infantil</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Identificación y atención de casos en Oaxaca</p>
          </Link>
          <Link href="/distintivo-tip" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
            <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2026/08/banners-TIP.jpg" alt="TIP" className={styles.bannerImg} style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#005a87' }}>Distintivo TIP</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Trabajo Inclusivo con el Periodo</p>
          </Link>
        </div>
      </section>

      {/* 5. Multimedia */}
      <section className={styles.multimediaSection}>
        <div className={styles.sectionHeader}>
          <h2>Multimedia</h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.multimediaContainer} style={{ textAlign: 'center' }}>
          <video 
            controls 
            style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2026/07/IMG_6622.mov"
          >
            Tu navegador no soporta la reproducción de video nativa.
          </video>
        </div>
      </section>

      {/* Ejes de Gobierno */}
      <section className={styles.ejesSection}>
        <div className={styles.sectionHeader}>
          <h2>Ejes de Gobierno</h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.ejesGrid}>
          <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/ejes/EJE_01_PS.png" alt="Eje 1" />
          <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/ejes/EJE_03_RH.png" alt="Eje 3" />
          <img src="https://www.oaxaca.gob.mx/trabajo/wp-content/themes/temadeps2023/assets/images/ejes/EJE_04_DIS.png" alt="Eje 4" />
        </div>
      </section>
      
    </div>
  );
}
