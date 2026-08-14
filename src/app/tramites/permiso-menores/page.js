import Link from 'next/link';

export default function PermisoMenoresPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px', minHeight: '60vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <Link href="/" style={{ color: '#005a87', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Regresar al Inicio
        </Link>
      </div>
      
      <h1 style={{ color: '#005a87', marginBottom: '20px', fontSize: '2.5rem' }}>
        Expedición de permisos de trabajo para menores en edad permitida
      </h1>
      
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
          <p><strong>Homoclave:</strong> TRABAJO-2023-10480-001-A</p>
          <p><strong>Tipo de trámite:</strong> Trámite</p>
          <p><strong>Dependencia:</strong> Secretaría del Trabajo</p>
          <p><strong>Unidad administrativa:</strong> Dirección de Inspección del Trabajo</p>
          <p><strong>Modalidad:</strong> Presencial</p>
        </div>

        <h3 style={{ color: '#005a87', marginBottom: '15px' }}>Descripción</h3>
        <p style={{ marginBottom: '20px' }}>
          Expedir permisos de trabajo para menores en edad permitida. Este trámite busca garantizar que los menores que laboren lo hagan bajo las condiciones legales y de seguridad establecidas por la ley.
        </p>

        <h3 style={{ color: '#005a87', marginBottom: '15px' }}>¿Quién puede solicitarlo?</h3>
        <ul style={{ marginBottom: '30px', paddingLeft: '20px', listStyleType: 'disc' }}>
          <li>Padres</li>
          <li>Tutor</li>
        </ul>

      </div>
    </div>
  );
}
