import React, { useState, useContext } from "react";
import { Formik } from "formik";
import styles from "../Inventory/Inventory.module.css";
import axios from "axios";
import AuthContext from "../../store/authContext";
import image from "../../assets/coming_soon.jpeg";

const AddInventoryForms = ({ closeModal, getCars, cars }) => {
  const { state, dispatch } = useContext(AuthContext);
  const [inventory, setInventory] = useState([]);
  const [showTable, setShowTable] = useState(false);
  
  // const [makeLi, setMakeLi] = useState("");
  // const [modelLi, setModelLi] = useState("");
  // const [priceLi, setPriceLi] = useState("");
  // const [yearLi, setYearLi] = useState("");
  // const [downPaymentLi, setDownPaymentLi] = useState("");
  // const [descriptionLi, setDescriptionLi] = useState("");
  // const [soldLi, setSoldLi] = useState("");
  // const [milesLi, setMilesLi] = useState("");
  // const [imageUrlLi, setImageUrlLi] = useState("");

  const [error, setError] = useState("");

  const initialValues = {
    make: "",
    model: "",
    price: "",
    year: "",
    down_payment: "",
    description: "",
    sold: false,
    miles: "",
    image_url: "",
  };

  const onSubmit = (values, {resetForm}) => {
    const addCar = () => {
      const newCar = {
        make: values.make,
        model: values.model,
        price: values.price,
        year: values.year,
        downPayment: values.down_payment,
        description: values.description,
        sold: values.sold,
        miles: values.miles,
        imageUrl: values.image_url,
      };
      if (newCar.make !== "") {
        setInventory([...inventory, newCar]);
      }
    };
    if (values.make === "" || values.model === "" || values.year === "") {
      setError("Please enter a value for all fields*");
      console.log(values);
    } else {
      if (values.image_url === "") {
        values.image_url = image;
      }
      console.log(values);
      axios
        .post(`http://localhost:4000/car_inventory`, values, {})
        .then((res) => {
          addCar();
          getCars();
          resetForm(); 
          // setFieldValue("sold", false);
          // setFieldValue("description", "");
          setShowTable(true);
          console.log("*****");
          console.log(inventory);
        });
    }
  };

  const formReturn = (formData) => {
    const { values, handleChange, handleSubmit } = formData;
    return (
      <form
        className={styles.add_inventory_container}
        onSubmit={handleSubmit}
        action=""
      >
        { showTable ?
        <table className={styles.car_array_container}>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Sold</th>
              <th>Price</th>
              <th>Down Payment</th>
              <th>Year</th>
              <th>Miles</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((car, carIndex) => (
              <tr key={carIndex}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.sold}</td>
                <td>{car.price}</td>
                <td>{car.downPayment}</td>
                <td>{car.year}</td>
                <td>{car.miles}</td>
                <td>{car.description}</td>
              </tr>
            ))}
          </tbody>
        </table> : ''}

        <section className={styles.make_model_container}>
          <input
            className={styles.inputs}
            value={values.make}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="make"
            placeholder="Vehicle Make"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.model}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMakeLi(e.target.value);
            //   handleChange(e);
            // }}
            name="model"
            placeholder="Vehicle Model"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.image_url}
            onChange={handleChange}
            // onChange={(e) => {
            //   setImageUrlLi(e.target.value);
            //   handleChange(e);
            // }}
            name="image_url"
            placeholder="Image URL"
            type="text"
          />
          </section>
        
        <section className={styles.price_container}>
          <input
            className={styles.inputs}
            value={values.price}
            onChange={handleChange}
            // onChange={(e) => {
            //   setPriceLi(e.target.value);
            //   handleChange(e);
            // }}
            name="price"
            placeholder="Price"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.down_payment}
            onChange={handleChange}
            // onChange={(e) => {
            //   setDownPaymentLi(e.target.value);
            //   handleChange(e);
            // }}
            name="down_payment"
            placeholder="Down Payment"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.year}
            onChange={handleChange}
            // onChange={(e) => {
            //   setYearLi(e.target.value);
            //   handleChange(e);
            // }}
            name="year"
            placeholder="Year"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.miles}
            onChange={handleChange}
            // onChange={(e) => {
            //   setMilesLi(e.target.value);
            //   handleChange(e);
            // }}
            name="miles"
            placeholder="Miles"
            type="text"
          />
        </section>

        <span className={styles.radio_btns_container}>
          <span className={styles.input_radio_btn_container}>
            <input
              name="sold"
              value={false}
              onChange={handleChange}
              // onChange={(e) => {
              //   setSoldLi(e.target.value);
              //   handleChange(e);
              // }}
              id="notSold"
              type="radio"
            />{" "}
            <label htmlFor="notSold">Not Sold</label>
          </span>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="sold"
              value={true}
              onChange={handleChange}
              // onChange={(e) => {
              //   setSoldLi(e.target.value);
              //   handleChange(e);
              // }}
              id="sold"
              type="radio"
            />{" "}
            <label htmlFor="sold">Sold</label>
          </span>
        </span>

        {/* <button type="button" className={styles.add_btn} onClick={addCar}>
          Add Another Car
        </button> */}
        <textarea
          placeholder="Description"
          name="description"
          id=""
          cols="30"
          rows="3"
          onChange={handleChange}
        ></textarea>
        <button className={styles.save_btn} type="submit">
          Save Car
        </button>
        <div>{error && <div style={{ color: "red" }}>{error}</div>}</div>
      </form>
    );
  };

  return (
    <span className={styles.newCar_container}>
      <h1 className={styles.newCar_title}> Add Inventory </h1>
      <span className={styles.alert_message}>
        **for now we must ensure the make and model mirrors EXACTLY like one that is already found in the DB since the
        image URL is temporarily rendered dynamically**
      </span>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formReturn}
      </Formik>
    </span>
  );
};

export default AddInventoryForms;
