import styles from './page.module.css';
import AppointmentSystem from '@/components/appointment/AppointmentSystem';

export default function CitasPage() {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Sistema de Citas PRODET</h1>
        <p>Procuraduría de la Defensa del Trabajo del Estado de Oaxaca</p>
      </header>
      
      <AppointmentSystem />
      
      <div className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h3>¿Necesitas ayuda?</h3>
          <p>Si tienes problemas para agendar tu cita, comunícate al <strong>951 506 1885</strong> o acude directamente a nuestras oficinas.</p>
        </div>
      </div>
    </div>
  );
}
