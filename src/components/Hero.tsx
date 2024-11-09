import videoHero from "../assets/img/videoHero";
import "../css/layouts/hero.css";
function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <video autoPlay muted loop className="hero-video">
          <source src={videoHero.Hero} type="video/webm" />
          Tu navegador no soporta la reproducción de video.
        </video>
        <div className="hero-content">
          <h1 className="writing">Ali Joshua Pérez Ramírez</h1>
          <p className="hidden-text"> aliperezkubi@hotmail.com</p>
        </div>
      </section>
    </>
  );
}
export default Hero;
