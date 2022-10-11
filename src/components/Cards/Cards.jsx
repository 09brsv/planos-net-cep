import { Link } from "react-router-dom";
import cards from "./cards.css";
const Cards = () => {
  return (
    <section className="cards flex flex-wrap justify-evenly my-20">
      <div className="card ">
        <p>Básico</p>
        <hr />
        <h2>R$ 50/mês</h2>
        <hr />
        <div className="description">
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
        </div>
        <Link to="/404">
          <button className="detalhes">Detalhes</button>
        </Link>
      </div>
      <div className="card relative">
        <div className=" py-1 px-2 rounded-t-md absolute -top-7 bg-orange-600">
          <small className="">Mais vendido</small>
        </div>
        <p>Premium</p>
        <hr />
        <h2>R$ 70/mês</h2>
        <hr />
        <div className="description">
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
        </div>
        <Link to="/404">
          <button className="detalhes">Detalhes</button>
        </Link>
      </div>
      <div className="card">
        <p>Avançado</p>
        <hr />
        <h2>R$ 100/mês</h2>
        <hr />
        <div className="description">
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
          <small>lorem ipsum dolor sit amet</small>
        </div>
        <Link to="/404">
          <button className="detalhes">Detalhes</button>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
