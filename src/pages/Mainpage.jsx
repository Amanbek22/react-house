import Card from "../components/card/Card";

function Mainpage() {
  const [arr, setArr] = useState([]);

  return (
    <div className="page">
      <h1 className="title">Последние объявления</h1>
      <div className="cards__wrapper">
        {
          arr.map((item) => (
            <Card title={item.title} price={item.price} />
          ))
          // [<Card />,<Card />, <Card />, <Card />]
        }
      </div>
      <h2 className="title">О нас</h2>
    </div>
  );
}

export default Mainpage;
