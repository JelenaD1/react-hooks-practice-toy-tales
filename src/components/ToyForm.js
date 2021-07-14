import React, {useEffect, useState} from "react";

function ToyForm({onClickSubmit}) {
  const [toyForm, setToyForm] = useState({
    name: "" ,
    image: "" ,
    likes: 0
  
  })


  const handleChange = (event) => {
    setToyForm({
      ...toyForm,
      [event.target.name]: event.target.value
    })
  }
  
  const handleSubmitClick = (event) => {
    event.preventDefault()
    onClickSubmit(toyForm)
    setToyForm({
      name: "" ,
      image: "" ,
      likes: 0

    })
    alert("New Toy has been added!")
  }

  


  return (
    <div className="container">
      <form onSubmit={handleSubmitClick} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input onChange={handleChange}
          value={toyForm.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input onChange={handleChange}
          value={toyForm.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input 
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
