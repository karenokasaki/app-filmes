import { useState } from "react";
import Cartaz from "./Cartaz";

function Card(props) {
  const { title, overview, img, vote } = props;
  const [showImg, setShowImg] = useState(false);

  function handleClick() {
    setShowImg(!showImg);

    /* a linha 9 é igual a esse dois if's
    if (showImg === true) {
        setShowImg(false)
    } 
    if (showImg === false) {
        setShowImg(true)
    } 
    */
  }

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>Score: {vote}</p>
      <button onClick={handleClick}>
        {showImg ? "Hide Poster" : "Show Poster"}
      </button>
      {showImg && <Cartaz img={img} />}
    </div>
  );
}

export default Card;
