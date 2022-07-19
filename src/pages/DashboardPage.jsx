import { useState } from "react";
import { useNavigate } from "react-router-dom";


function DashboardPage() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/house", {
      method: "POST",
      body: JSON.stringify( { 
        title: title, 
        price: price, 
        img: image 
      } ),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then( (res) => res.json())
      .then( (data) => {
        navigate("/house/" + data.id)
      })
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleChangeImage = (e) => {
    setImage(e.target.value)
  }

  return (
    <div className="page">
      <h1 className="title">Создать объявления</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={handleChangeTitle} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input value={price} onChange={handleChangePrice} type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input value={image} onChange={handleChangeImage} type="url" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Создать
        </button>
      </form>
    </div>
  );
}

export default DashboardPage;
