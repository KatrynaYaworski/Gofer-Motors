import React, { useState, useEffect, useContext } from "react";
import styles from "./Inventory.module.css";
import InventoryCard from "../Inventory/InventoryCard/InventoryCard";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import AuthContext from "../../store/authContext";
import InventoryContext from "../../store/inventoryContext";
import Modal from "../Modal/Modal";
import AddInventoryForms from "./AddInventoryForms";
import InventoryFilters from "./InventoryFilters/InventoryFilters";
import navImage from "../../assets/Arial top view of used cars1.png"

function Inventory() {
  const authContext = useContext(AuthContext);
  const inventoryContext = useContext(InventoryContext);

  const { state: authState } = authContext;
  const { state: inventoryState } = inventoryContext;
  const [cars, setCars] = useState([]);
  const [soldStatus, setSoldStatus] = useState("Not Sold");
  const [soldSearch, setSoldSearch] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function getCars() {
    axios
      .get("http://localhost:4000/car_inventory")
      .then((response) => {
        console.log("Cars Data", response.data);
        setCars(response.data);
        console.log("#####");
        console.log(authState);
      })
      .catch((error) => {
        console.error("Error fetching cars data: ", error);
      });
  }
  useEffect(() => {
    getCars();
  }, [authState.userId]);
  console.log("Cars Map Data", cars);

  useEffect(() => {
    if (soldStatus === "Sold") {
      setSoldSearch("true");
    } else if (soldStatus === "Not Sold") {
      setSoldSearch("false");
    }
  }, [soldStatus, setSoldSearch]);


useEffect(()=>{
  const filteredCars = cars
    .filter((car) => {
      const carMake = car.make.toLowerCase();
      const carModel = car.model.toLowerCase();
      const carBody = car.body_type.toLowerCase();
      const carYear = +car.year;
      const makeSearch = inventoryState.make.toLowerCase();
      const modelSearch = inventoryState.model.toLowerCase();
      const statusSearch = String(car.sold);
      const bodySearch = inventoryState.bodyStyle.toLowerCase();
      return (carMake.includes(makeSearch) || !makeSearch) &&
        (carModel.includes(modelSearch) || !modelSearch) &&
        (carBody.includes(bodySearch) || !bodySearch) &&
        (carYear === +inventoryState.year || !inventoryState.year) &&
        soldStatus !== ""
        ? statusSearch === soldSearch
        : (carMake.includes(makeSearch) || !makeSearch) &&
            (carModel.includes(modelSearch) || !modelSearch) &&
            (carBody.includes(bodySearch) || !bodySearch) &&
            (carYear === +inventoryState.year || !inventoryState.year);
      })
      console.log(filteredCars)
      const carResults = filteredCars.map((car) => (
      <InventoryCard key={car.car_id} car={car} getCars={getCars} />
      ));
      setFilteredCars(carResults);
},[])


  return (
    <div className={styles.wrapper}>
         <div className={styles.nav_img_container}>
        <img
          className={styles.nav_img}
          src={navImage}
          alt=""
          width={"100%"}
          height={"110%"}
        />
        <div className={styles.overlay}></div>
        <div className={styles.txt_overlay_container}>
        <h3 className={styles.title}>
        {authState.isadmin === true || authState.isadmin === "true"
          ? " ** Admin Inventory View ** "
          : "Quality Used Vehicles in Alamo TX"}
      </h3>
        </div>
      </div>


      
      <div className={styles.inventory_body_wrapper}>
        <InventoryFilters
        cars={cars}
        soldStatus={soldStatus}
        setSoldStatus={setSoldStatus}
          />
        <span className={styles.inventory_inner_body_container}>
          <SearchBar
            cars={cars}
            make={inventoryState.make}
            year={inventoryState.year}
            model={inventoryState.model}
            soldStatus={soldStatus}
            setSoldStatus={setSoldStatus}
          />
          {(authState.token && authState.isadmin === true) ||
          authState.isadmin === "true" ? (
            <button className="add-inventory" onClick={openModal}>
              Add Inventory
            </button>
          ) : (
            // : ''}
            ""
          )}
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <AddInventoryForms
              cars={cars}
              getCars={getCars}
              isOpen={isModalOpen}
              closeModal={closeModal}
            ></AddInventoryForms>
          </Modal>
          <div className={styles.card_container}>{filteredCars}</div>
        </span>
      </div>
    </div>
  );
}

export default Inventory;
