import React, { useContext } from "react";
import "./SearchBar.css";
import AuthContext from "../../store/authContext";
// import axios from "axios";

function SearchBar({ model, year, make, cars, soldStatus, setSoldStatus }) {
  const { state } = useContext(AuthContext);

  // const handleSearch = () => {

  //   const params = {};
  // if(make) params.Make = make;
  // if(model) params.Model = model;
  // if(year) params.Year = year;

  //   axios.get("/car_inventory", {params})
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

  // console.log(`CARS+++++++${JSON.stringify(cars)}`);

  const yearsObj = {};
  const makeObj = {};
  const modelObj = {};

  return (
    <div className="search">
      <div className="searchContainer"></div>
      <div className="input-container">
        {/* <div className="make-input-container"> */}
        {state.isadmin || state.isadmin === "true" ? (
          <span className="year-container">
            <span className="radio-sold-btns-container">
              <input
                onChange={() => setSoldStatus("Sold")}
                type="radio"
                id="sold"
                checked={soldStatus === "Sold"}
                name="status"
                value="Sold"
              />
              <label className="text" htmlFor="sold">
                SOLD
              </label>

              <input
                onChange={() => setSoldStatus("Not Sold")}
                type="radio"
                id="notsold"
                checked={soldStatus === "Not Sold"}
                name="status"
                value="Not Sold"
                defaultChecked
              />
              <label className="text" htmlFor="notsold">
                NOT SOLD
              </label>
            </span>
            {/* <div className="radio-sold-btns-container">
            <input onChange={(e) => setSoldStatus(e.target.value)} type="radio" id="sold" checked={soldStatus === 'Sold'} name="status" value={true} />
            <label className="text" htmlFor="sold">SOLD</label>
            <input onChange={(e) => setSoldStatus(e.target.value)} type="radio" id="notsold" checked={soldStatus === 'Not Sold'}  name="status" value={false} />
            <label className="text" htmlFor="notsold">NOT SOLD</label>
        </div> */}
          </span>
        ) : (
          <span className="year-container">
            
          </span>
        )}

        <div className="year-container"></div>

        <button
          className="filter_btn"
          onClick={() => {
            setSoldStatus("Not Sold");
          }}
        >
          <i
            className="fa-solid fa-filter-circle-xmark"
            style={{ color: "#ffffff", fontSize: "25px" }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
