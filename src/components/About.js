import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "about-section", id: "about", children: [_jsx("h2", { children: "Acerca de m\u00ED" }), _jsx("p", { children: "Soy un profesional en inform\u00E1tica con un fuerte deseo de crecimiento y aprendizaje continuo, enfocado en el desarrollo de aplicaciones y en la mejora constante de la seguridad y eficiencia de los sistemas. Me motiva a adquirir nuevos conocimientos y habilidades que contribuyan a crear soluciones tecnol\u00F3gicas m\u00E1s seguras y efectivas." }), _jsx("ul", { className: "skills_about", children: _jsx("li", { children: listSkills }) })] }) }));
}
export default About;
