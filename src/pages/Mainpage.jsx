import Card from "../components/card/Card";

function Mainpage() {
    const arr = [
        {
            id: 1,
            title: "Продаю 2км кв в 12мкр",
            price: 45000,
            img: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        },
        {
            id: 2,
            title: "Продаю 3км кв в 8мкр",
            price: 60000,
            img: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        },
        {
            id: 3,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        },
    ]
  return (
    <div className="page">
        <h1 className="title">Последние объявления</h1>
        <div className="cards__wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <h2 className="title">О нас</h2>
    </div>
  )
}

export default Mainpage;