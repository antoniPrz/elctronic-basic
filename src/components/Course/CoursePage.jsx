import React from 'react';
import styles from './CoursePage.module.css';

const CoursePage = () => {
  return (
    <div className={styles.courseContainer}>
      <header className={styles.header}>
        <h1>Módulo 1: Fundamentos de Electricidad y Ley de Ohm</h1>
      </header>

      <main>
        <section className={styles.section}>
          <h2>Clase Práctica: Usando el Multímetro</h2>
          <p>En esta sesión práctica, aprenderemos a utilizar la herramienta esencial de todo técnico:</p>
          <ul>
            <li>Medición de voltaje en corriente continua (baterías, fuentes de alimentación).</li>
            <li>Medición de voltaje en corriente alterna (tomas de corriente domésticas).</li>
            <li>Medición de resistencia en componentes electrónicos.</li>
            <li>Prueba de continuidad para verificar cables y pistas en circuitos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Material Teórico para la Semana</h2>
          <p>Conceptos clave que debes dominar:</p>
          <ul>
            <li><strong>Voltaje (V):</strong> La "presión" que impulsa a los electrones.</li>
            <li><strong>Corriente (I):</strong> El flujo de electrones a través de un conductor.</li>
            <li><strong>Resistencia (R):</strong> La oposición al paso de la corriente.</li>
            <li><strong>Ley de Ohm:</strong> La relación fundamental entre Voltaje, Corriente y Resistencia (V = I * R).</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Ejercicios para Aplicar lo Aprendido</h2>
          <p>Pon a prueba tus conocimientos:</p>
          <ul>
            <li>Calcula el voltaje si tienes una corriente de 2A y una resistencia de 5Ω.</li>
            <li>Calcula la corriente que fluye por un circuito con una fuente de 9V y una resistencia de 2.2kΩ.</li>
            <li>Mide el voltaje de una pila AA y una pila de 9V con tu multímetro.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CoursePage;
