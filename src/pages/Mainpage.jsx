import Card from "../components/card/Card";
import { useEffect, useState } from "react";

function Mainpage() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/house")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArr(data);
      });
  }, []);

  return (
    <div className="page">
      <h1 className="title">Последние объявления</h1>
      <div className="cards__wrapper">
        {
          arr.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))
          // [<Card />,<Card />, <Card />, <Card />]
        }
      </div>
      <h2 className="title">О нас</h2>
    </div>
  );
}

export default Mainpage;
