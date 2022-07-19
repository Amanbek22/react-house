import { Link } from "react-router-dom";
import css from "./Card.module.css";

function Card(props) {
  return (
    <div className={"card " + css.card}>
      <img
        src={
          props.img ||
          "https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.price} $</h5>
        <Link to={`house/${props.id}`} className="btn btn-primary">
          Купить
        </Link>
      </div>
    </div>
  );
}

export default Card;
