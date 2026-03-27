import React from "react";

function Card({ elem }) {
  return (
    <div className="card">
      <img src={`https://picsum.photos/id/${elem.id}/300/200`} alt="img" />
      <p>{elem.author}</p>
    </div>
  );
}

export default Card;
