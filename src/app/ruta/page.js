import Link from 'next/link';

export default function RutaPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px', minHeight: '60vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <Link href="/" style={{ color: '#005a87', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Regresar al Inicio
        </Link>
      </div>
      
      <h1 style={{ color: '#005a87', marginBottom: '20px', fontSize: '2.5rem' }}>
        Ruta de Identificación, Atención y Canalización de casos de Trabajo Infantil
      </h1>
      
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
        <p style={{ marginBottom: '20px' }}>
          👧🏽👦🏽 Ante 17 autoridades municipales de la Zona Metropolitana de Oaxaca se presentó la Ruta de Identificación, Atención y Canalización de casos de Trabajo Infantil, un manual estratégico para unificar criterios y coordinar acciones urgentes en las Comisiones Interinstitucionales para la Prevención y Erradicación del Trabajo Infantil (CITIs).
        </p>

        {/* Video Embedding */}
        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <video 
            controls 
            style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            src="https://www.oaxaca.gob.mx/trabajo/wp-content/uploads/sites/93/2026/07/IMG_6622.mov"
          >
            Tu navegador no soporta la reproducción de video nativa.
          </video>
        </div>
        
        <p style={{ marginBottom: '20px' }}>
          🫱🏽‍🫲🏾 En la reunión, encabezada por el responsable de la política laboral en Oaxaca Horacio Sosa Villavicencio, se expuso que todas las autoridades estatales y municipales podrán aplicar un esquema de pasos directos para intervenir ante los diferentes casos de trabajo infantil, garantizando un abordaje amigable, apegado a la legalidad y ponderando el interés superior de las Niñas, Niños y Adolescentes.
        </p>
        
        <p style={{ marginBottom: '10px' }}>
          📈 Se evaluará mensualmente el impacto mediante cuatro indicadores clave:
        </p>
        
        <ul style={{ marginBottom: '20px', paddingLeft: '20px', listStyleType: 'disc' }}>
          <li>La reincorporación escolar de los menores</li>
          <li>El avance de las carpetas de investigación</li>
          <li>Las inspecciones laborales de la Secretaría del Trabajo</li>
          <li>Capacitación familiar a través del Icapet</li>
        </ul>
        
        <p style={{ marginBottom: '20px' }}>
          📚 Con el despliegue de esta Ruta, el Gobierno del Estado y los municipios metropolitanos reafirman su compromiso de proteger los derechos de este sector, asegurando que sus actividades principales sean la escuela y el juego.
        </p>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '10px', color: '#005a87' }}>Consultar Documento Completo</h3>
          <p>
            <a 
              href="https://heyzine.com/flip-book/db2c24ee78.html#page/1" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#005a87', fontWeight: 'bold', textDecoration: 'underline' }}
            >
              📖 Haz click aquí para ver la Ruta de Identificación en formato interactivo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
