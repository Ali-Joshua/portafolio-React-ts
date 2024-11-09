// Define el tipo de `user` (opcional, pero recomendado)
import "../css/layouts/curriculum.css";
import imageCurriculum from "../assets/img/imageCurriculum";
type NewType = {
  name: string;
  information: string;
  imageUrl: string;
  imageSize: number;
  url: string;
};

const user: NewType = {
  name: "Ali Joshua Pérez Ramírez",
  information: "Currículum Vitae",
  imageUrl: imageCurriculum.CV,
  imageSize: 100,
  url: "https://1drv.ms/b/s!Ah7Vb7uiSolAh6oSAj0x52iun84gyw?e=ApxR0h",
};

export default function Curriculum() {
  return (
    <>
      <div className="profile-container">
        <img src={user.imageUrl} alt={user.name} className="profile-image" />
        <div className="profile-info">
          <p className="user-name">{user.name}</p>
          <a href={user.url} target="_blank" className="user-info">
            {" "}
            Ir al {user.information}
          </a>
        </div>
      </div>
    </>
  );
}
