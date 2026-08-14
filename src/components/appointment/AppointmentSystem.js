'use client';
import { useState } from 'react';
import styles from './AppointmentSystem.module.css';
import Step1Date from './Step1Date';
import Step2Form from './Step2Form';
import Step3Success from './Step3Success';

export default function AppointmentSystem() {
  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    date: null,
    time: null,
    personalInfo: null
  });

  const handleDateSelect = (date, time) => {
    setAppointmentData(prev => ({ ...prev, date, time }));
    setStep(2);
  };

  const handleFormSubmit = (personalInfo) => {
    setAppointmentData(prev => ({ ...prev, personalInfo }));
    setStep(3);
  };

  const handleStartOver = () => {
    setAppointmentData({ date: null, time: null, personalInfo: null });
    setStep(1);
  };

  return (
    <div className={`glass-card fade-in ${styles.systemContainer}`}>
      {step < 3 && (
        <div className="step-indicator">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-circle">{step > 1 ? '✓' : '1'}</div>
            <span>Selecciona fecha y hora</span>
          </div>
          <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-circle">{step > 2 ? '✓' : '2'}</div>
            <span>Captura tus datos</span>
          </div>
        </div>
      )}

      <div className={styles.stepContent}>
        {step === 1 && (
          <Step1Date onSelect={handleDateSelect} />
        )}
        {step === 2 && (
          <Step2Form 
            appointmentData={appointmentData} 
            onBack={() => setStep(1)} 
            onSubmit={handleFormSubmit} 
          />
        )}
        {step === 3 && (
          <Step3Success 
            appointmentData={appointmentData} 
            onReset={handleStartOver} 
          />
        )}
      </div>
    </div>
  );
}
