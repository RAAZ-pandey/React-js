import React, {useState} from "react";

function ObjectUpdate(){

  const [car, setCar]= useState({year: 1969,
                                maker: "Ford",
                                model: "Mustang" });

  function handleYearChange(event){
        
      setCar(c =>({...c, year: event.target.value}))
  }

  function handleMakerChange(event){
      setCar(c =>({...c, maker: event.target.value}))
  }

  function handleModelChange(event){
          
    setCar(c => ({...c, model: event.target.value}))
  }

  return(<div>
            <p>Your favourite Car is: {car.year} {car.maker} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br/>
            <input type="text" value={car.maker} onChange={handleMakerChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
       </div>);
}

export default ObjectUpdate