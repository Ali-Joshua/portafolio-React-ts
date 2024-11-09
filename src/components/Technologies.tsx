import imageTechnologies from "../assets/img/imageTechnologies";
import "../css/layouts/tecnologies.css";
interface Technology {
  src: string;
  alt: string;
}

const technologies: Technology[] = [
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
const Technologies: React.FC = () => {
  return (
    <>
      <section className="technologies-section" id="technologies">
        <h2>Tecnologías que manejo</h2>
        <div className="technologies-image">
          {technologies.map((technology: Technology, index: number) => (
            <img key={index} src={technology.src} alt={technology.alt} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Technologies;
