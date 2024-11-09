import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/layouts/navbar.css";
function Navbar() {
    return (_jsx("header", { children: _jsxs("nav", { className: "navbar", children: [_jsxs("div", { className: "menu-toggle", id: "mobile-menu", children: [_jsx("div", { className: "bar" }), _jsx("div", { className: "bar" }), _jsx("div", { className: "bar" })] }), _jsxs("ul", { className: "nav-links", id: "navLinks", children: [_jsx("li", { children: _jsx("a", { href: "#hero", children: "INICIO" }) }), _jsx("li", { children: _jsx("a", { href: "#about", children: "ACERCA DE MI" }) }), _jsx("li", { children: _jsx("a", { href: "#technologies", children: "TECNOLOG\u00CDAS" }) }), _jsx("li", { children: _jsx("a", { href: "#summary", children: "EXPERIENCIA" }) }), _jsx("li", { children: _jsx("a", { href: "#certificates", children: "CERTIFICACIONES" }) }), _jsx("li", { children: _jsx("a", { href: "#contact", children: "CONTACTO" }) })] })] }) }));
}
export default Navbar;
