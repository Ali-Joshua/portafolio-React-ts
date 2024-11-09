import imageSummary from "../assets/img/imageSummary";
import "../css/layouts/summary.css";
type NewType = {
  title: string;
  years: string;
  description: string;
  src: string;
  alt: string;
};
const summary: NewType[] = [
  {
    title: "UGMEX Campus Oaxaca",
    years: "2019 - 2023",
    description:
      "Estudié la Licenciatura en Informática, donde aprendí tecnologías clave para el desarrollo y mantenimiento de aplicaciones. Mi formación incluyó programación, estructuras de datos, bases de datos y programación orientada a objetos, además de temas específicos para asegurar el mantenimiento y optimización de aplicaciones.",
    src: imageSummary.UGMEX,
    alt: "UGMEX",
  },
  {
    title: "Municipio de Oaxaca de Juárez, Analista tipo B",
    years: "Febrero 2023 - Octubre 2024",
    description:
      "Desarrollé aplicaciones en Visual Basic para automatizar tareas repetitivas en diferentes áreas, optimizando su uso y asegurando una rápida accesibilidad, mantenimiento a equipos de computo.",
    src: imageSummary.MUNICIPIO,
    alt: "MUNICIPIO",
  },
];
function Summary() {
  return (
    <>
      <section className="summary_section" id="summary">
        <div className="container_summary">
          {summary.map((item, index) => (
            <div key={index} className="column">
              <h3 className="summary-title"></h3>
              <div className="summary-item"></div>
              <h4>{item.title}</h4>
              <p>
                <em>{item.years}</em>
              </p>
              <p>{item.description}</p>
              <div className="image-container">
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Summary;
