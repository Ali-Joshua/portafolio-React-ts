import imageCertificates from "../assets/img/imageCertificates";
import "../css/layouts/certificates.css";
function Certificates() {
  return (
    <>
      <section className="certificates-section" id="certificates">
        <h2>Certificaciones</h2>
        <div className="grid-container">
          <div className="grid-item">
            <a
              href="https://1drv.ms/b/s!Ah7Vb7uiSolAh6oRJCHPkVFkA3ZMGg?e=bvxaX7"
              target="_blank"
            >
              <img src={imageCertificates.EXCEL} alt="Excel" />
              <div>
                <h3>Microsoft Office Specialist: Office Excel 2016</h3>
              </div>
            </a>
          </div>
          <div className="grid-item">
            <a
              href="https://1drv.ms/b/s!Ah7Vb7uiSolAh6oQVgbjOmuwc775tQ?e=YoIOVY"
              target="_blank"
            >
              <img src={imageCertificates.WORD} alt="Word" />
              <div>
                <h3>Microsoft Office Specialist: Office Word 2016</h3>
              </div>
            </a>
          </div>
          <div className="grid-item">
            <a
              href="https://www.freecodecamp.org/certification/fcc7f4be347-6cd7-47cb-a796-f59688b086f1/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              <img src={imageCertificates.FC} alt="JavaScript" />
              <div>
                <h3>JavaScript Algorithms and Data Structures</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Certificates;
