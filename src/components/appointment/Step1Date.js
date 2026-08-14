'use client';
import { useState } from 'react';
import styles from './Step1Date.module.css';

const AVAILABLE_TIMES = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00'
];

export default function Step1Date({ onSelect }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);

  // Simulated occupied times based on the date length just for prototyping feel
  const getOccupiedTimes = (date) => {
    if (!date) return [];
    const seed = date.charCodeAt(date.length - 1);
    if (seed % 2 === 0) return ['10:00', '13:00', '16:00'];
    return ['09:00', '11:00', '14:00'];
  };

  const occupiedTimes = getOccupiedTimes(selectedDate);
  const today = new Date().toISOString().split('T')[0];

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime);
    }
  };

  return (
    <div className="fade-in">
      <h2 className={styles.title}>¿Cuándo deseas agendar tu cita?</h2>
      <p className={styles.subtitle}>Selecciona el día y horario de tu preferencia para recibir atención en la Procuraduría.</p>

      <div className={styles.container}>
        <div className={styles.calendarSection}>
          <label className={styles.label}>1. Elige una fecha</label>
          <input 
            type="date" 
            className={styles.dateInput} 
            min={today}
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedTime(null);
            }}
          />
          <div className={styles.infoBox}>
            <p><strong>Nota:</strong> Las citas tienen una duración estimada de 60 minutos. Horario de atención: 09:00 a 17:00 hrs.</p>
          </div>
        </div>

        <div className={styles.timeSection}>
          <label className={styles.label}>2. Elige un horario</label>
          {!selectedDate ? (
            <div className={styles.emptyState}>
              <p>Selecciona una fecha primero para ver los horarios disponibles.</p>
            </div>
          ) : (
            <div className={styles.timeGrid}>
              {AVAILABLE_TIMES.map(time => {
                const isOccupied = occupiedTimes.includes(time);
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    disabled={isOccupied}
                    className={`${styles.timeSlot} ${isSelected ? styles.selected : ''} ${isOccupied ? styles.occupied : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                    <span className={styles.statusLabel}>
                      {isOccupied ? 'Ocupado' : isSelected ? 'Seleccionado' : 'Disponible'}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button 
          className="btn-primary" 
          disabled={!selectedDate || !selectedTime}
          onClick={handleContinue}
        >
          Continuar con mis datos →
        </button>
      </div>
    </div>
  );
}
