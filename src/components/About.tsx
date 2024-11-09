import "../css/layouts/about.css";
const listSkills = [
  "Interés y alta disponibilidad por aprender. ",
  "Pro-activo, buena actitud y con ganas de crecer profesionalmente. ",
  "Responsabilidad en las actividades asignadas. ",
  "Persistencia, honradez y confianza en el trabajo. ",
  "Adaptabilidad para enfrentar situaciones de cambio. ",
  "Alta eficiencia en el trabajo remoto o a distancia. ",
];
function About() {
  return (
    <>
      <section className="about-section" id="about">
        <h2>Acerca de mí</h2>
        <p>
          Soy un profesional en informática con un fuerte deseo de crecimiento y
          aprendizaje continuo, enfocado en el desarrollo de aplicaciones y en
          la mejora constante de la seguridad y eficiencia de los sistemas. Me
          motiva a adquirir nuevos conocimientos y habilidades que contribuyan a
          crear soluciones tecnológicas más seguras y efectivas.
        </p>
        <ul className="skills_about">
          <li>{listSkills}</li>
        </ul>
      </section>
    </>
  );
}
export default About;
