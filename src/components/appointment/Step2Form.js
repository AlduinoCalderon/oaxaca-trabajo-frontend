'use client';
import { useState } from 'react';
import styles from './Step2Form.module.css';

const MOTIVOS = [
  'Despido injustificado',
  'Pago de prestaciones',
  'Acoso u hostigamiento laboral',
  'Orientación sobre derechos laborales',
  'Convenio o conflicto laboral',
  'Prestaciones de persona trabajadora fallecida',
  'Otro'
];

export default function Step2Form({ appointmentData, onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    curp: '',
    telefono: '',
    correo: '',
    municipio: '',
    motivo: '',
    descripcion: '',
    avisoPrivacidad: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate validation and submit
    onSubmit(formData);
  };

  const isValid = 
    formData.nombre && formData.primerApellido && 
    formData.curp.length >= 18 && formData.telefono.length >= 10 &&
    formData.correo && formData.motivo && formData.avisoPrivacidad;

  return (
    <div className={`fade-in ${styles.wrapper}`}>
      <div className={styles.summaryCard}>
        <div className={styles.summaryIcon}>📅</div>
        <div>
          <h3>Tu cita seleccionada</h3>
          <p><strong>Fecha:</strong> {appointmentData.date}</p>
          <p><strong>Hora:</strong> {appointmentData.time} hrs (60 min)</p>
          <p><strong>Lugar:</strong> PRODET (Oaxaca de Juárez)</p>
        </div>
      </div>

      <h2 className={styles.title}>Captura tus datos</h2>
      <p className={styles.subtitle}>Por favor, llena la siguiente información para confirmar tu cita.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div className={styles.fieldGroup}>
            <label>Nombre(s) *</label>
            <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Ej. Juan" />
          </div>
          <div className={styles.fieldGroup}>
            <label>Primer Apellido *</label>
            <input type="text" name="primerApellido" required value={formData.primerApellido} onChange={handleChange} placeholder="Ej. Pérez" />
          </div>
          <div className={styles.fieldGroup}>
            <label>Segundo Apellido</label>
            <input type="text" name="segundoApellido" value={formData.segundoApellido} onChange={handleChange} placeholder="Ej. López" />
          </div>
          <div className={styles.fieldGroup}>
            <label>CURP *</label>
            <input type="text" name="curp" required maxLength={18} value={formData.curp} onChange={handleChange} placeholder="18 caracteres" style={{textTransform: 'uppercase'}} />
          </div>
          <div className={styles.fieldGroup}>
            <label>Teléfono (10 dígitos) *</label>
            <input type="tel" name="telefono" required maxLength={10} value={formData.telefono} onChange={handleChange} placeholder="Ej. 9510000000" />
          </div>
          <div className={styles.fieldGroup}>
            <label>Correo Electrónico *</label>
            <input type="email" name="correo" required value={formData.correo} onChange={handleChange} placeholder="ejemplo@correo.com" />
          </div>
          <div className={styles.fieldGroup}>
            <label>Municipio de residencia</label>
            <input type="text" name="municipio" value={formData.municipio} onChange={handleChange} placeholder="Ej. Oaxaca de Juárez" />
          </div>
          <div className={styles.fieldGroup}>
            <label>Motivo de la asesoría *</label>
            <select name="motivo" required value={formData.motivo} onChange={handleChange}>
              <option value="">Selecciona un motivo</option>
              {MOTIVOS.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
            <label>Breve descripción del asunto (Opcional)</label>
            <textarea name="descripcion" rows={3} value={formData.descripcion} onChange={handleChange} placeholder="Describe brevemente el motivo de tu consulta..." maxLength={300}></textarea>
          </div>
        </div>

        <div className={styles.securitySection}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="aviso" name="avisoPrivacidad" required checked={formData.avisoPrivacidad} onChange={handleChange} />
            <label htmlFor="aviso">He leído y acepto el <strong>Aviso de Privacidad</strong> para el tratamiento de mis datos personales.</label>
          </div>
          <div className={styles.captchaPlaceholder}>
            <div className={styles.captchaBox}>
              <input type="checkbox" id="robot" required />
              <label htmlFor="robot">No soy un robot (CAPTCHA simulado)</label>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className="btn-secondary" onClick={onBack}>← Volver</button>
          <button type="submit" className="btn-primary" disabled={!isValid}>Confirmar Cita →</button>
        </div>
      </form>
    </div>
  );
}
