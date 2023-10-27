import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

function SearchBar({ model, year, make, setYear, setMake, setModel, cars }) {
  // const handleSearch = () => {

  //   const params = {};
  // if(make) params.Make = make;
  // if(model) params.Model = model;
  // if(year) params.Year = year;

  //   axios.get("http://localhost:4000/car_listing", {params})
  //     .then(response => {
  //       const filteredCars = response.data.filter(car =>
  //         (!make || car.make === make) &&
  //         (!model || car.model === model) &&
  //         (!year || car.year.toString() === year)
  //       );
  //       setCars(filteredCars);
  //     })
  //     .catch(error => {
  //       console.error("There was an error fetching the cars data", error);
  //     });
  // }

  // const filteredCars = cars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));

  console.log(`CARS+++++++${JSON.stringify(cars)}`);

  const yearsObj = {};

  return (
    <div className="search">
      <div className="searchContainer">
        <h3 className="titleSearch">
          What type of vehicle are you interested in?
        </h3>
      </div>
      <div className="input-container">
    {/* <div className="make-input-container"> */}
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />    
      {/* <SearchIcon className="search_icon" /></div> */}
      {/* <div className="model-input-container"> */}
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
          {/* <SearchIcon className="search_icon" /></div> */}

      <div className="year-container">
        {/* <div className="year-title">Select Year</div> */}

        <select
          onChange={(e) => setYear(e.target.value)}
          name="year"
          value={year}
          id="year"
        >
          {cars
            .filter((car) => {
              if (yearsObj[car.year]) {
                return false;
              }
              yearsObj[car.year] = true;
              return true;
            })
            .sort((a, b) => {
              return a.year - b.year;
            })
            .map((car) => {
              return <option value={car.year}>{car.year}</option>;
            })}
        </select>
      </div>

      {/* <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      /> */}

  
      <button
        className="filter_btn"
        onClick={() => {
          setYear("");
          setModel("");
          setMake("");
        }}
      >
        <i
          className="fa-solid fa-filter-circle-xmark"
          style={{ color: "#ffffff", fontSize: "25px" }}
        ></i>
      </button>
      </div>

      {/* {cars.map(car => {
          const carImage = require(`../ImageReel/${car.make}_${car.model}.jpg`)
return (
          <div key={car.car_id}> 
          <div className="searchTitleResponse">
          {car.make} {car.model} {car.year} 
          </div>
          <img src={carImage} className="carImageCard" alt="car"/>
          </div>
)
})} */}
    </div>
  );
}

export default SearchBar;
