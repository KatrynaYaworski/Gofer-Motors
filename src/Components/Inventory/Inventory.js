import React, { useState, useEffect } from 'react';
import "./Inventory.css";
import InventoryCard from "../InventoryCard/InventoryCard";
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

function Inventory() {
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');

  useEffect(() => {
    axios.get("http://localhost:4000/car_listing")
    .then(response => {
      console.log("Cars Data", response.data)
      setCars(response.data);
    })
    .catch(error => {
      console.error("Error fetching cars data: ", error);
    });
  }, []);


  console.log("Cars Map Data", cars)
  
  const carResults = cars.filter((car)=>{
    const carMake = car.make.toLowerCase()
    const carModel = car.model.toLowerCase();
    const carYear = +car.year;
    const makeSearch = make.toLowerCase();
    const modelSearch = model.toLowerCase();
  
    return (
      (carMake.includes(makeSearch) || !makeSearch) &&
      (carModel.includes(modelSearch) || !modelSearch) &&
      (carYear === +year || !year)
    )
  })
    .map(car => (
      <InventoryCard key={car.car_id} car={car} />
  ))
  return (
    <div className="completeInventory">
      <h3 className="advancedTitle">Ready for an Upgrade? Your Next Car Awaits!</h3>
      
<SearchBar cars={cars} setMake={setMake} make={make} setYear={setYear} year={year} model={model} setModel={setModel} />
      <div className="cardContainer">
        {carResults}
    
      </div>
    </div>
  );
}

export default Inventory;
