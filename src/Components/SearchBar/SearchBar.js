// import React, { useContext } from "react";
// import "./SearchBar.css";
// import AuthContext from "../../store/authContext";
// import { ChangeCircleSharp } from "@mui/icons-material";
// // import axios from "axios";

// function SearchBar({
//   model,
//   year,
//   make,
//   setYear,
//   setMake,
//   setModel,
//   cars,
//   soldStatus,
//   setSoldStatus,
// }) {
//   const { state } = useContext(AuthContext);

//   // const handleSearch = () => {

//   //   const params = {};
//   // if(make) params.Make = make;
//   // if(model) params.Model = model;
//   // if(year) params.Year = year;

//   //   axios.get("/car_inventory", {params})
//   //     .then(response => {
//   //       const filteredCars = response.data.filter(car =>
//   //         (!make || car.make === make) &&
//   //         (!model || car.model === model) &&
//   //         (!year || car.year.toString() === year)
//   //       );
//   //       setCars(filteredCars);
//   //     })
//   //     .catch(error => {
//   //       console.error("There was an error fetching the cars data", error);
//   //     });
//   // }

//   // const filteredCars = cars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));

//   console.log(`CARS+++++++${JSON.stringify(cars)}`);

//   const yearsObj = {};
//   const makeObj = {};
//   const modelObj = {};

//   return (
//     <div className="search">
//       <div className="searchContainer"></div>
//       <div className="input-container">
//         {/* <div className="make-input-container"> */}
//         {state.isadmin || state.isadmin === "true" ? (
//           <span className="year-container">
//             <select
//               onChange={(e) => setMake(e.target.value)}
//               name="make"
//               value={make}
//               id="make"
//             >
//               <option value="">Select Make</option>
//               {cars
//                 .filter((car) => {
//                   if (makeObj[car.make]) {
//                     return false;
//                   }
//                   makeObj[car.make] = true;
//                   return true;
//                 })
//                 .sort((a, b) => {
//                   return a.make.localeCompare(b.make);
//                 })
//                 .map((car) => {
//                   return <option value={car.make}>{car.make}</option>;
//                 })}
//             </select>

//             <select
//               onChange={(e) => setModel(e.target.value)}
//               name="model"
//               value={model}
//               id="model"
//             >
//               <option value="">Select Model</option>
//               {cars
//                 .filter((car) => {
//                   if (modelObj[car.model]) {
//                     return false;
//                   }
//                   modelObj[car.model] = true;
//                   return true;
//                 })
//                 .sort((a, b) => {
//                   return a.model.localeCompare(b.model);
//                 })
//                 .map((car) => {
//                   return <option value={car.model}>{car.model}</option>;
//                 })}
//             </select>

//             <select
//               onChange={(e) => setYear(e.target.value)}
//               name="year"
//               value={year}
//               id="year"
//             >
//               <option value="">Select Year</option>
//               {cars
//                 .filter((car) => {
//                   if (yearsObj[car.year]) {
//                     return false;
//                   }
//                   yearsObj[car.year] = true;
//                   return true;
//                 })
//                 .sort((a, b) => {
//                   return a.year - b.year;
//                 })
//                 .map((car) => {
//                   return <option value={car.year}>{car.year}</option>;
//                 })}
//             </select>
//             <span className="radio-sold-btns-container">
//               <input
//                 onChange={() => setSoldStatus("Sold")}
//                 type="radio"
//                 id="sold"
//                 checked={soldStatus === "Sold"}
//                 name="status"
//                 value="Sold"
//               />
//               <label className="text" htmlFor="sold">
//                 SOLD
//               </label>

//               <input
//                 onChange={() => setSoldStatus("Not Sold")}
//                 type="radio"
//                 id="notsold"
//                 checked={soldStatus === "Not Sold"}
//                 name="status"
//                 value="Not Sold"
//                 defaultChecked
//               />
//               <label className="text" htmlFor="notsold">
//                 NOT SOLD
//               </label>
//             </span>
//             {/* <div className="radio-sold-btns-container">
//             <input onChange={(e) => setSoldStatus(e.target.value)} type="radio" id="sold" checked={soldStatus === 'Sold'} name="status" value={true} />
//             <label className="text" htmlFor="sold">SOLD</label>
//             <input onChange={(e) => setSoldStatus(e.target.value)} type="radio" id="notsold" checked={soldStatus === 'Not Sold'}  name="status" value={false} />
//             <label className="text" htmlFor="notsold">NOT SOLD</label>
//         </div> */}
//           </span>
//         ) : (
//           <span className="year-container">
//             <select
//               onChange={(e) => setMake(e.target.value)}
//               name="make"
//               value={make}
//               id="make"
//             >
//               <option value="">Select Make</option>
//               {cars
//                 .filter((car) => {
//                   if (makeObj[car.make]) {
//                     return false;
//                   }
//                   makeObj[car.make] = true;
//                   return true;
//                 })
//                 .sort((a, b) => {
//                   return a.make.localeCompare(b.make);
//                 })
//                 .map((car) => {
//                   return <option value={car.make}>{car.make}</option>;
//                 })}
//             </select>

//             <select
//               onChange={(e) => setModel(e.target.value)}
//               name="model"
//               value={model}
//               id="model"
//             >
//               <option value="">Select Model</option>
//               {cars
//                 .filter((car) => {
//                   if (modelObj[car.model]) {
//                     return false;
//                   }
//                   modelObj[car.model] = true;
//                   return true;
//                 })
//                 .sort((a, b) => {
//                   return a.model.localeCompare(b.model);
//                 })
//                 .map((car) => {
//                   return <option value={car.model}>{car.model}</option>;
//                 })}
//             </select>

//             <select
//               onChange={(e) => setYear(e.target.value)}
//               name="year"
//               value={year}
//               id="year"
//             >
//               <option value="">Select Year</option>
//               {cars
//                 .filter((car) => {
//                   if (yearsObj[car.year]) {
//                     return false;
//                   }
//                   yearsObj[car.year] = true;
//                   return true;
//                 })
//                 .sort((a, b) => {
//                   return a.year - b.year;
//                 })
//                 .map((car) => {
//                   return <option value={car.year}>{car.year}</option>;
//                 })}
//             </select>
//           </span>
//         )}

//         <div className="year-container">
//           {/* <div className="year-title">Select Year</div> */}
//         </div>

//         {/* <input
//         type="text"
//         placeholder="Year"
//         value={year}
//         onChange={(e) => setYear(e.target.value)}
//       /> */}

//         <button
//           className="filter_btn"
//           onClick={() => {
//             setYear("");
//             setModel("");
//             setMake("");
//             setSoldStatus("Not Sold");
//           }}
//         >
//           <i
//             className="fa-solid fa-filter-circle-xmark"
//             style={{ color: "#ffffff", fontSize: "1.3vw" }}
//           ></i>
//         </button>
//       </div>

//       {/* {cars.map(car => {
//           const carImage = require(`../ImageReel/${car.make}_${car.model}.jpg`)
// return (
//           <div key={car.car_id}>
//           <div className="searchTitleResponse">
//           {car.make} {car.model} {car.year}
//           </div>
//           <img src={carImage} className="carImageCard" alt="car"/>
//           </div>
// )
// })} */}
//     </div>
//   );
// }

// export default SearchBar;

// Search bar Changes
import React, { useState, useEffect, useContext } from "react";
import "./SearchBar.css";
import AuthContext from "../../store/authContext";

function SearchBar({
  model,
  year,
  make,
  setYear,
  setMake,
  setModel,
  cars,
  soldStatus,
  setSoldStatus,
}) {
  const { state } = useContext(AuthContext);

  const [filteredMakes, setFilteredMakes] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [filteredYears, setFilteredYears] = useState([]);

  useEffect(() => {
    let filteredCars = cars;

    if (year) {
      filteredCars = filteredCars.filter((car) => car.year === year);
    }

    if (make) {
      filteredCars = filteredCars.filter((car) => car.make === make);
    }

    if (model) {
      filteredCars = filteredCars.filter((car) => car.model === model);
    }

    const uniqueMakes = [...new Set(filteredCars.map((car) => car.make))];
    setFilteredMakes(uniqueMakes);

    const uniqueModels = [...new Set(filteredCars.map((car) => car.model))];
    setFilteredModels(uniqueModels);

    const uniqueYears = [...new Set(filteredCars.map((car) => car.year))];
    setFilteredYears(uniqueYears);
  }, [year, make, model, cars]);

  return (
    <div className="search">
      <div className="searchContainer"></div>
      <div className="input-container">
        {state.isadmin || state.isadmin === "true" ? (
          <span className="year-container">
            <select
              onChange={(e) => setMake(e.target.value)}
              name="make"
              value={make}
              id="make"
              className="make-select"
            >
              <option value="">Select Make</option>
              {filteredMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setModel(e.target.value)}
              name="model"
              value={model}
              id="model"
              className="model-select"
            >
              <option value="">Select Model</option>
              {filteredModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setYear(e.target.value)}
              name="year"
              value={year}
              id="year"
              className="year-select"
            >
              <option value="">Select Year</option>
              {filteredYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

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
          </span>
        ) : (
          <span className="year-container">
            <select
              onChange={(e) => setMake(e.target.value)}
              name="make"
              value={make}
              id="make"
              className="make-select"
            >
              <option value="">Select Make</option>
              {filteredMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setModel(e.target.value)}
              name="model"
              value={model}
              id="model"
              className="model-select"
            >
              <option value="">Select Model</option>
              {filteredModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setYear(e.target.value)}
              name="year"
              value={year}
              id="year"
              className="year-select"
            >
              <option value="">Select Year</option>
              {filteredYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </span>
        )}

        <div className="year-container">

        </div>

        <button
          className="filter_btn"
          onClick={() => {
            setYear("");
            setModel("");
            setMake("");
            setSoldStatus("Not Sold");
          }}
        >
          <i
            className="fa-solid fa-filter-circle-xmark"
            style={{ color: "#ffffff", fontSize: "1.3vw" }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
