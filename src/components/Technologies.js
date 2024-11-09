import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import imageTechnologies from "../assets/img/imageTechnologies";
import "../css/layouts/tecnologies.css";
const technologies = [
    { src: imageTechnologies.CSS, alt: "CSS" },
    { src: imageTechnologies.HMTL, alt: "HTML" },
    { src: imageTechnologies.JS, alt: "JavaScript" },
    { src: imageTechnologies.GIT, alt: "Git" },
    { src: imageTechnologies.PHP, alt: "PHP" },
    { src: imageTechnologies.WP, alt: "WordPress" },
    { src: imageTechnologies.MySQL, alt: "MySQL" },
    { src: imageTechnologies.PS, alt: "Photoshop" },
    { src: imageTechnologies.FIGMA, alt: "Figma" },
    { src: imageTechnologies.ANGULAR, alt: "Angular" },
];
const Technologies = () => {
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "technologies-section", id: "technologies", children: [_jsx("h2", { children: "Tecnolog\u00EDas que manejo" }), _jsx("div", { className: "technologies-image", children: technologies.map((technology, index) => (_jsx("img", { src: technology.src, alt: technology.alt }, index))) })] }) }));
};
export default Technologies;
