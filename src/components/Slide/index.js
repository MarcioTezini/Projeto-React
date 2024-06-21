import './style.css';
import fotoSlide from "../../assets/img/PS5.jpg";

export const Slide = () => {
    return (
        <div className="containerSlide">
            <img className="imgSlide" src={fotoSlide} alt="Slide"/>
        </div>
    )
}