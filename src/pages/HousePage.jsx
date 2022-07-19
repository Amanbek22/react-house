import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HousePage() {
  const { id } = useParams();
  const [house, setHouse] = useState(null)

  useEffect(() => {
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/house/" + id)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setHouse(data)
    });
  }, [id])

  if(!house) {
    return <h2>...Data loading</h2>
  }
  return (
    <div className="page">
      <h1>House Page {house.price}$</h1>
    </div>
  );
}
