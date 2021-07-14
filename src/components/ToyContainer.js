import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, onClickDelete, onClickLike}) {
  
  
  return (
    <div id="toy-collection">{toyList.map(toy => <ToyCard onClickLike={onClickLike} onClickDelete={onClickDelete} key={toy.id} toy={toy} />)}
    </div>
  );
}

export default ToyContainer;
