import Link from 'next/link';

export default function DistintivoTipPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px', minHeight: '60vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <Link href="/" style={{ color: '#005a87', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Regresar al Inicio
        </Link>
      </div>
      
      <h1 style={{ color: '#005a87', marginBottom: '20px', fontSize: '2.5rem' }}>
        IMPULSA GOBIERNO DE OAXACA ESPACIOS LABORALES DIGNOS E INCLUSIVOS A TRAVÉS DEL DISTINTIVO TIP
      </h1>
      
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
        <p style={{ marginBottom: '20px' }}>
          👩🏽 A través de una reunión de seguimiento y del seminario «Equidad de género y salud menstrual», el Gobierno del Estado fortalece, junto con el sector empleador, la construcción de espacios laborales más dignos, inclusivos y con perspectiva de género.
        </p>
        
        <p style={{ marginBottom: '20px' }}>
          📌 El encargado de la política laboral, Horacio Sosa Villavicencio encabezó este encuentro, con la participación de representantes de los centros de trabajo que forman parte del Distintivo TIP -Trabajo Inclusivo con el Periodo-, entre de ellos:
        </p>
        
        <ul style={{ marginBottom: '20px', paddingLeft: '20px', listStyleType: 'disc' }}>
          <li>Toyota</li>
          <li>Honda del Valle Oaxaca</li>
          <li>Farmacias del Ahorro</li>
          <li>Mini Abastos</li>
          <li>Gasolinera G500</li>
          <li>La Red</li>
          <li>Huevos El Calvario</li>
          <li>SOS Bonita</li>
          <li>Mart King Superhogar</li>
        </ul>
        
        <p style={{ marginBottom: '20px' }}>
          🔖 Se brindó asesoría y acompañamiento para sensibilizar, eliminar estigmas y fortalecer una cultura de respeto, empatía e inclusión dentro de los centros de trabajo
        </p>
      </div>
    </div>
  );
}
