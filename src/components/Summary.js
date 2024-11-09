import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import imageSummary from "../assets/img/imageSummary";
import "../css/layouts/summary.css";
const summary = [
    {
        title: "UGMEX Campus Oaxaca",
        years: "2019 - 2023",
        description: "Estudié la Licenciatura en Informática, donde aprendí tecnologías clave para el desarrollo y mantenimiento de aplicaciones. Mi formación incluyó programación, estructuras de datos, bases de datos y programación orientada a objetos, además de temas específicos para asegurar el mantenimiento y optimización de aplicaciones.",
        src: imageSummary.UGMEX,
        alt: "UGMEX",
    },
    {
        title: "Municipio de Oaxaca de Juárez, Analista tipo B",
        years: "Febrero 2023 - Octubre 2024",
        description: "Desarrollé aplicaciones en Visual Basic para automatizar tareas repetitivas en diferentes áreas, optimizando su uso y asegurando una rápida accesibilidad, mantenimiento a equipos de computo.",
        src: imageSummary.MUNICIPIO,
        alt: "MUNICIPIO",
    },
];
function Summary() {
    return (_jsx(_Fragment, { children: _jsx("section", { className: "summary_section", id: "summary", children: _jsx("div", { className: "container_summary", children: summary.map((item, index) => (_jsxs("div", { className: "column", children: [_jsx("h3", { className: "summary-title" }), _jsx("div", { className: "summary-item" }), _jsx("h4", { children: item.title }), _jsx("p", { children: _jsx("em", { children: item.years }) }), _jsx("p", { children: item.description }), _jsx("div", { className: "image-container", children: _jsx("img", { src: item.src, alt: item.alt }) })] }, index))) }) }) }));
}
export default Summary;
