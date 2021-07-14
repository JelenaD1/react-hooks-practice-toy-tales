import React from "react";

function ToyCard({toy, onClickDelete, onClickLike}) {

  


  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.image}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={() => onClickLike(toy.id, toy.likes)} className="like-btn">Like {"<3"}</button>
      <button onClick={() => onClickDelete(toy.id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
