import css from "./Card.module.css"

function Card(props) {
  return (
    <div className={"card " + css.card}>
      <img src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h5 className="card-title">5000 $</h5>
        <a href="#" className="btn btn-primary">
          Купить
        </a>
      </div>
    </div>
  );
}

export default Card;
