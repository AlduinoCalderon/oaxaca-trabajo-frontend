'use client';
import styles from './Step3Success.module.css';

export default function Step3Success({ appointmentData, onReset }) {
  // Generate a random folio for prototype purposes
  const folio = `PRODET-${new Date().getFullYear()}-${Math.floor(Math.random() * 900000 + 100000)}`;

  return (
    <div className={`fade-in ${styles.wrapper}`}>
      <div className={styles.successHeader}>
        <div className={styles.iconWrapper}>
          <div className={styles.checkIcon}>✓</div>
        </div>
        <h2 className={styles.title}>¡Cita Agendada con Éxito!</h2>
        <p className={styles.subtitle}>
          Se ha enviado una confirmación a tu correo electrónico: <strong>{appointmentData.personalInfo?.correo}</strong>
        </p>
      </div>

      <div className={styles.ticketContainer}>
        <div className={styles.ticket}>
          <div className={styles.ticketHeader}>
            <div className={styles.ticketLogos}>
              <span className={styles.logoOaxaca}>GOBIERNO DE OAXACA</span>
              <span className={styles.logoProdet}>PRODET</span>
            </div>
            <h3>Comprobante de Cita</h3>
            <div className={styles.folio}>Folio: {folio}</div>
          </div>
          
          <div className={styles.ticketBody}>
            <div className={styles.infoRow}>
              <span>Nombre:</span>
              <strong>{appointmentData.personalInfo?.nombre} {appointmentData.personalInfo?.primerApellido}</strong>
            </div>
            <div className={styles.infoRow}>
              <span>CURP:</span>
              <strong>{appointmentData.personalInfo?.curp?.toUpperCase()}</strong>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.infoRow}>
              <span>Fecha:</span>
              <strong>{appointmentData.date}</strong>
            </div>
            <div className={styles.infoRow}>
              <span>Hora:</span>
              <strong>{appointmentData.time} hrs</strong>
            </div>
            <div className={styles.infoRow}>
              <span>Lugar:</span>
              <strong>Procuraduría de la Defensa del Trabajo (Col. Reforma)</strong>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.infoRow}>
              <span>Motivo:</span>
              <strong>{appointmentData.personalInfo?.motivo}</strong>
            </div>
          </div>
          
          <div className={styles.ticketFooter}>
            <p><strong>Requisitos para acudir:</strong></p>
            <ul>
              <li>INE o identificación oficial vigente.</li>
              <li>Presentarse 15 minutos antes de la hora acordada.</li>
              <li>Comprobantes de relación laboral (opcional).</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={`btn-primary ${styles.downloadBtn}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Descargar Comprobante PDF
        </button>
        
        <button className="btn-secondary" onClick={onReset}>
          Agendar Otra Cita
        </button>
      </div>
    </div>
  );
}
