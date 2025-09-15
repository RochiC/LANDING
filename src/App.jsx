import React from "react";
import "./App.css";

const BrandGlyph = () => (
  <svg
    className="brand-glyph"
    viewBox="0 0 48 48"
    role="img"
    aria-hidden="true"
  >
    <path
      d="M10 26c0-8.8 5.8-16 14.4-16 5.3 0 9.6 4.5 9.6 9.8 0 7.2-6.6 11.8-12.7 15.2 3.4-1.6 7.2-2.5 11.1-2.5 4.5 0 8.3 1.3 11.1 3.5"
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="33" r="3.5" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="arrow-icon" viewBox="0 0 40 12" aria-hidden="true">
    <path
      d="M1 6h31m0 0L27 2m5 4-5 4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const UserIcon = () => (
  <svg className="step-icon" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="21" r="12" />
    <path
      d="M10 56c3.2-11.8 12.4-18 22-18s18.8 6.2 22 18"
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const MoleculeIcon = () => (
  <svg className="step-icon" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="16" cy="18" r="7" />
    <circle cx="48" cy="14" r="5" />
    <circle cx="45" cy="40" r="8" />
    <circle cx="20" cy="46" r="6" />
    <path
      d="M21 23l8 14m4-16 8-4m-2 21-13 6"
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const NetworkIcon = () => (
  <svg className="step-icon" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="18" cy="18" r="6" />
    <circle cx="46" cy="16" r="6" />
    <circle cx="32" cy="34" r="7" />
    <circle cx="18" cy="48" r="6" />
    <circle cx="46" cy="50" r="6" />
    <path
      d="M18 24l-2 18m30-26-6 16m-8-4 12 12m-24 0 12-12m-8-20 9 16"
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const ChartGraphic = () => (
  <svg className="chart" viewBox="0 0 420 280" role="img" aria-labelledby="chartTitle chartDesc">
    <title id="chartTitle">Tendencia de tasa de años de vida ajustados por discapacidad</title>
    <desc id="chartDesc">
      Comparación de la evolución de la tasa para hombres y mujeres entre 2000 y 2019.
    </desc>
    <rect x="0" y="0" width="420" height="280" rx="16" ry="16" className="chart-surface" />
    <g className="chart-grid">
      <line x1="64" y1="60" x2="370" y2="60" />
      <line x1="64" y1="110" x2="370" y2="110" />
      <line x1="64" y1="160" x2="370" y2="160" />
      <line x1="64" y1="210" x2="370" y2="210" />
    </g>
    <line x1="64" y1="40" x2="64" y2="230" className="axis" />
    <line x1="64" y1="230" x2="370" y2="230" className="axis" />
    <polyline
      className="line male"
      points="64,200 110,190 160,170 210,150 260,130 310,112 360,96"
    />
    <polyline
      className="line female"
      points="64,210 110,202 160,186 210,172 260,160 310,148 360,142"
    />
    <g className="axis-labels">
      <text x="54" y="235">2000</text>
      <text x="138" y="235">2004</text>
      <text x="202" y="235">2008</text>
      <text x="266" y="235">2012</text>
      <text x="330" y="235">2016</text>
      <text x="368" y="235">2019</text>
      <text x="30" y="64">800</text>
      <text x="30" y="114">750</text>
      <text x="30" y="164">700</text>
      <text x="30" y="214">650</text>
    </g>
    <g className="legend" transform="translate(80,250)">
      <circle cx="0" cy="0" r="6" className="male" />
      <text x="12" y="4">Hombres</text>
      <circle cx="120" cy="0" r="6" className="female" />
      <text x="132" y="4">Mujeres</text>
    </g>
  </svg>
);

const CommunityIcon = () => (
  <svg className="community-icon" viewBox="0 0 220 220" aria-hidden="true">
    <circle cx="110" cy="110" r="92" className="ring" />
    <g className="node" transform="translate(110 30)">
      <circle r="22" />
    </g>
    <g className="node" transform="translate(48 86)">
      <circle r="22" />
    </g>
    <g className="node" transform="translate(172 86)">
      <circle r="22" />
    </g>
    <g className="node" transform="translate(78 170)">
      <circle r="22" />
    </g>
    <g className="node" transform="translate(142 170)">
      <circle r="22" />
    </g>
    <path
      d="M110 52L60 100m100 0L110 52m-60 56l20 44m80-44l-20 44m-38-92l0 44m0 48l0-48"
      fill="none"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <a className="brand" href="#hero">
          <span className="brand-icon" aria-hidden="true">
            <BrandGlyph />
          </span>
          <span className="brand-name">
            MolGen<span className="brand-accent">.AI</span>
          </span>
        </a>
        <a className="primary-btn" href="#join">
          Generar
        </a>
      </header>

      <main className="sections">
        <section className="panel hero" id="hero">
          <div className="background-molecule" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-tag">Potenciado por IA</p>
            <h1>Genera posibles medicamentos en segundos</h1>
            <p className="hero-text">
              Explora nuevos compuestos terapéuticos con la ayuda de modelos
              generativos que aceleran la investigación y reducen los tiempos de
              prueba.
            </p>
            <div className="hero-actions">
              <a className="secondary-btn" href="#process">
                <span>Cómo funciona</span>
                <span className="arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="panel process" id="process">
          <div className="panel-inner">
            <h2 className="section-title">Así funciona MolGen.AI</h2>
            <p className="section-subtitle">
              Cada etapa del flujo está pensada para que puedas pasar de la idea
              a la molécula validada en minutos.
            </p>
            <div className="process-flow">
              <article className="step-card">
                <span className="icon-wrapper gradient">
                  <UserIcon />
                </span>
                <h3>El usuario ingresa su configuración</h3>
                <p>
                  Define objetivos terapéuticos, restricciones químicas y datos
                  clínicos relevantes para orientar al modelo.
                </p>
              </article>
              <span className="connector" aria-hidden="true">
                <ArrowIcon />
              </span>
              <article className="step-card">
                <span className="icon-wrapper">
                  <MoleculeIcon />
                </span>
                <h3>Generación de la molécula</h3>
                <p>
                  La IA combina millones de patrones moleculares y propone
                  candidatos que cumplen con tus parámetros.
                </p>
              </article>
              <span className="connector" aria-hidden="true">
                <ArrowIcon />
              </span>
              <article className="step-card">
                <span className="icon-wrapper gradient">
                  <NetworkIcon />
                </span>
                <h3>Uso del usuario</h3>
                <p>
                  Analiza, compara y exporta las moléculas listas para continuar
                  con ensayos clínicos o simulaciones.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="panel insights" id="insights">
          <div className="panel-inner insights-grid">
            <figure className="chart-card">
              <figcaption className="chart-title">
                Tendencia de la tasa estandarizada de años de vida ajustados por
                discapacidad debido a la diabetes, por sexo, 2000-2019
              </figcaption>
              <ChartGraphic />
              <p className="chart-footnote">
                Fuente: Global Burden of Disease. Tasas expresadas por 100 mil
                habitantes.
              </p>
            </figure>
            <div className="insight-copy">
              <h2>¿Cuántas personas son afectadas por la diabetes?</h2>
              <p>
                Los diagnósticos de diabetes tipo II siguen creciendo a nivel
                global. Se estima que para 2040 aumentarán en un 30 % si no se
                implementan estrategias preventivas.
              </p>
              <ul className="insight-list">
                <li>
                  <span className="bullet male" aria-hidden="true" />
                  <span>
                    Hombres: 7.1 % de incremento en los últimos diez años.
                  </span>
                </li>
                <li>
                  <span className="bullet female" aria-hidden="true" />
                  <span>
                    Mujeres: 4.9 % de incremento sostenido durante la última
                    década.
                  </span>
                </li>
              </ul>
              <p className="insight-note">
                Comprender estas tendencias permite priorizar desarrollos y
                personalizar tratamientos desde la primera iteración.
              </p>
            </div>
          </div>
        </section>

        <section className="panel join" id="join">
          <div className="panel-inner join-grid">
            <div className="join-copy">
              <h2>¿Querés unirte a MolGen?</h2>
              <p>
                Te damos la oportunidad de participar del proyecto. El próximo
                paso es completar el formulario para que podamos contactarte y
                sumar tus talentos al equipo.
              </p>
              <a className="primary-btn" href="#contacto">
                Formulario
              </a>
            </div>
            <div className="join-graphic" aria-hidden="true">
              <CommunityIcon />
            </div>
          </div>
        </section>

        <section className="panel faq" id="faq">
          <div className="panel-inner faq-inner">
            <h2>Respondemos tus dudas</h2>
            <details>
              <summary>Preguntas frecuentes</summary>
              <p>
                Encontrá respuestas sobre metodologías, validaciones de datos y
                tiempos de implementación dentro de nuestro centro de ayuda.
              </p>
            </details>
            <details id="contacto">
              <summary>Contacto</summary>
              <p>
                Escribinos a <a href="mailto:hola@molgen.ai">hola@molgen.ai</a>{" "}
                o completá el formulario para coordinar una demo personalizada.
              </p>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
