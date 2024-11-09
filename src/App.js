import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./css/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Resume from "./components/Summary";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Curriculum from "./components/Curriculum";
//import React from "react";
//import imageTechnologies from "./assets/img/imageTechnologies";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(Curriculum, {}), _jsx(About, {}), _jsx(Technologies, {}), _jsx(Resume, {}), _jsx(Certificates, {}), _jsx(Contacts, {})] }));
}
export default App;
