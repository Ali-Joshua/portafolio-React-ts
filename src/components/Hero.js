import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import videoHero from "../assets/img/videoHero";
import "../css/layouts/hero.css";
function Hero() {
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "hero", id: "hero", children: [_jsxs("video", { autoPlay: true, muted: true, loop: true, className: "hero-video", children: [_jsx("source", { src: videoHero.Hero, type: "video/webm" }), "Tu navegador no soporta la reproducci\u00F3n de video."] }), _jsxs("div", { className: "hero-content", children: [_jsx("h1", { className: "writing", children: "Ali Joshua P\u00E9rez Ram\u00EDrez" }), _jsx("p", { className: "hidden-text", children: " aliperezkubi@hotmail.com" })] })] }) }));
}
export default Hero;
