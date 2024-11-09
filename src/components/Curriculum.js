import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// Define el tipo de `user` (opcional, pero recomendado)
import "../css/layouts/curriculum.css";
import imageCurriculum from "../assets/img/imageCurriculum";
const user = {
    name: "Ali Joshua Pérez Ramírez",
    information: "Currículum Vitae",
    imageUrl: imageCurriculum.CV,
    imageSize: 100,
    url: "https://1drv.ms/b/s!Ah7Vb7uiSolAh6oSAj0x52iun84gyw?e=ApxR0h",
};
export default function Curriculum() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "profile-container", children: [_jsx("img", { src: user.imageUrl, alt: user.name, className: "profile-image" }), _jsxs("div", { className: "profile-info", children: [_jsx("p", { className: "user-name", children: user.name }), _jsxs("a", { href: user.url, target: "_blank", className: "user-info", children: [" ", "Ir al ", user.information] })] })] }) }));
}
