import React, { useContext } from "react";
import styles from "./InventoryFilters.module.css";
import InventoryContext from "../../../store/inventoryContext";
import { Slider, Typography } from "@mui/material";

const InventoryFilters = ({ cars }) => {
  const { state, dispatch } = useContext(InventoryContext);

  const handleSelectChange = (filterType, value) => {
    dispatch({ type: filterType, payload: value });
  };
  const handleSubmit = (event) => {
  event.preventDefault();

  const filteredCars = cars.filter((car) => {

    if (state.make && car.make !== state.make) {
      return false;
    }

    if (state.model && car.model !== state.model) {
      return false; 
    }

    if (state.year && car.year !== parseInt(state.year)) {
      return false; 
    }

    if (state.bodyStyle && car.body_type !== state.bodyStyle) {
      return false; 
    }

    return true;
  });

  dispatch({ type: "RESET_FILTERS", payload: { filteredCars } });
};
  const handlePriceChange = (values) => {
    dispatch({ type: "SET_PRICE_RANGE", payload: values });
  };
  const handleMinPriceChange = (event) => {
    dispatch({ type: "SET_MIN_PRICE", payload: event.target.value });
  };

  const handleMaxPriceChange = (event) => {
    dispatch({ type: "SET_MAX_PRICE", payload: event.target.value });
  };

  const resetFilters = () => {
    dispatch({ type: "RESET_FILTERS" });
  };
  const yearsObj = {};
  const makeObj = {};
  const modelObj = {};
  const bodyStyleObj = {};
  return (
    <span className={styles.filters_wrapper}>
      <form className={styles.quick_search_form} onSubmit={handleSubmit}>
        <h3>Quick Search</h3>

        <select
          value={state.make}
          onChange={(e) => handleSelectChange("SET_MAKE", e.target.value)}
          id="make"
          name="make"
        >
          <option value="">Select Make</option>
          {cars
            .filter((car) => {
              if (makeObj[car.make]) {
                return false;
              }
              makeObj[car.make] = true;
              return true;
            })
            .sort((a, b) => {
              return a.make.localeCompare(b.make);
            })
            .map((car) => {
              return <option value={car.make}>{car.make}</option>;
            })}
        </select>

        <br />

          <select
            value={state.model}
            onChange={(e) => handleSelectChange("SET_MODEL", e.target.value)}
            id="model"
            name="model"
          >
            <option value="">Select Model</option>
            {cars
                .filter((car) => {
                  if (modelObj[car.model]) {
                    return false;
                  }
                  modelObj[car.model] = true;
                  return true;
                })
                .sort((a, b) => {
                  return a.model.localeCompare(b.model);
                })
                .map((car) => {
                  return <option value={car.model}>{car.model}</option>;
                })}
          </select>

        <br />

          <select
            value={state.year}
            onChange={(e) => handleSelectChange("SET_YEAR", e.target.value)}
            id="year"
            name="year"
          >
            <option value="">Select Year</option>
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

        <br />

          <select
            value={state.bodyStyle}
            onChange={(e) =>
              handleSelectChange("SET_BODY_STYLE", e.target.value)}
              id="bodystyle"
              name="bodystyle"
          >
            <option value="">Select Body Style</option>
            {cars
                .filter((car) => {
                  if (bodyStyleObj[car.body_type]) {
                    return false;
                  }
                  bodyStyleObj[car.body_type] = true;
                  return true;
                })
                .sort((a, b) => {
                  return a.body_type - b.body_type;
                })
                .map((car) => {
                  return <option value={car.body_type}>{car.body_type}</option>;
                })}
          </select>

        <br />
        <button type="submit">Apply Filters</button>
        <button type="button" onClick={resetFilters}>
          Reset Filters
        </button>
      </form>

      <div>line</div>

      <h1>Filters</h1>

      <h3>Price</h3>
      <div>
        <Typography id="price-range-slider" gutterBottom>
          Price Range
        </Typography>
        <Slider
          value={state.priceRange || [0, 100000]}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="price-range-slider"
          min={0}
          max={100000}
        />
        <Typography>
          Min: ${state.priceRange?.[0] || 0} - Max: $
          {state.priceRange?.[1] || 100000}
        </Typography>
      </div>
    </span>
  );
};

export default InventoryFilters;
