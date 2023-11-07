import React, { useState, useContext } from "react";
import { Formik } from "formik";
import styles from "../Inventory/Inventory.module.css";
import axios from "axios";
import AuthContext from "../../store/authContext";
import image from "../../assets/coming_soon.jpeg";
import Inventory from "./Inventory";

const AddInventoryForms = ({ closeModal, getCars, cars }) => {
  const { state, dispatch } = useContext(AuthContext);
  const [inventory, setInventory] = useState([]);
  const [makeLi, setMakeLi] = useState("");
  const [modelLi, setModelLi] = useState("");
  const [priceLi, setPriceLi] = useState("");
  const [yearLi, setYearLi] = useState("");
  const [downPaymentLi, setDownPaymentLi] = useState("");
  const [descriptionLi, setDescriptionLi] = useState("");
  const [soldLi, setSoldLi] = useState("");
  const [milesLi, setMilesLi] = useState("");
  const [imageUrlLi, setImageUrlLi] = useState("");

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

  const onSubmit = (values) => {
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
          closeModal();
          getCars();
          console.log(res.data);
        });
    }
  };

  const addCar = () => {
    const newCar = {
      makeLi,
      modelLi,
      priceLi,
      yearLi,
      downPaymentLi,
      descriptionLi,
      soldLi,
      milesLi,
      imageUrlLi,
    };
    if (makeLi !== "") {
      setInventory([...inventory, newCar]);
      setMakeLi("");
      setModelLi("");
      setPriceLi("");
      setYearLi("");
      setDownPaymentLi("");
      setDescriptionLi("");
      setSoldLi("");
      setMilesLi("");
      setImageUrlLi("");
    }
  };

  const formReturn = (formData) => {
    const { values, handleChange, handleSubmit } = formData;
    return (
      <form
        className={styles.add_recipe_container}
        onSubmit={handleSubmit}
        action=""
      >
        <section className={styles.car_array_container}>
          {/* <section className={styles.ing_quant_container_left}>
            <input
              value={makeLi}
              className={styles.inputs}
              placeholder="Make"
              onChange={(e) => setMakeLi(e.target.value)}
              type="text"
            />
            <input
              value={modelLi}
              className={styles.inputs}
              placeholder="Model"
              onChange={(e) => setModelLi(e.target.value)}
              type="text"
            />
            <input
              value={yearLi}
              className={styles.inputs}
              placeholder="Year"
              onChange={(e) => setYearLi(e.target.value)}
              type="text"
            />
            <input
              value={downPaymentLi}
              className={styles.inputs}
              placeholder="Down Payment"
              onChange={(e) => setDownPaymentLi(e.target.value)}
              type="text"
            />
            <input
              value={descriptionLi}
              className={styles.inputs}
              placeholder="Description"
              onChange={(e) => setDescriptionLi(e.target.value)}
              type="text"
            />
            <input
              value={soldLi}
              className={styles.inputs}
              placeholder="Sold"
              onChange={(e) => setSoldLi(e.target.value)}
              type="text"
            />
            <input
              value={imageUrlLi}
              className={styles.inputs}
              placeholder="Image URL"
              onChange={(e) => setImageUrlLi(e.target.value)}
              type="text"
            />
          </section> */}
          <ul className={styles.car_array_container_right}>
            {inventory.map((car) => (
              <li>{`${car.makeLi} ${car.modelLi} ${car.yearLi} ${car.downPaymentLi} ${car.descriptionLi} ${car.soldLi} ${car.milesLi} ${car.imageUrlLi}`}</li>
            ))}
          </ul>
        </section>
        <section className={styles.name_image_container}>
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
        <section className={styles.radio_btns_container}>
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
        </section>
        <section className={styles.type_container}>
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
    <section className={styles.newCar_container}>
      <h1 className={styles.newCar_title}> Add a new Car! </h1>
      <div>
        - for now we must add a make and model that is found in the DB since the
        image URL is not stored in DB!
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formReturn}
      </Formik>
    </section>
  );
};

export default AddInventoryForms;
