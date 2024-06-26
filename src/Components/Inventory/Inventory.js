import React, { useState, useEffect, useContext } from "react";
import styles from "./Inventory.module.css";
import InventoryCard from "../Inventory/InventoryCard/InventoryCard";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import AuthContext from "../../store/authContext";
import Modal from "../Modal/Modal";
import AddInventoryForms from "./AddInventoryForms";
import navImage from "../../assets/Arial top view of used cars1.png";


function Inventory() {
  const { state, dispatch } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [soldStatus, setSoldStatus] = useState("Not Sold");
  const [soldSearch, setSoldSearch] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?385902226c0553324126a6a330d";
    script.defer = true;
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  // const [userdata, setUserData] = useState();

  // useEffect(() => {
  //   if (state.userId) {
  //     axios
  //       .get(`/users/${state.username}`)
  //       .then((response) => {
  //         setUserData(response.data);
  //         console.log(`RESPONSE USER DATA ${response.data}`);
  //       })
  //       .catch((error) => {
  //         console.error("Error get request for users:", error.response.data);
  //       });
  //   }
  // }, state.userId);
  // console.log(userdata);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function getCars() {
    axios
      .get("/car_inventory")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars data: ", error);
      });
  }
  useEffect(() => {
    getCars();
  }, [state.userId]);

  useEffect(() => {
    if (soldStatus === 'Sold') {
      setSoldSearch('true');
    } else if (soldStatus === 'Not Sold') {
      setSoldSearch('false');
    }
  }, [soldStatus, setSoldSearch]);

  const carResults = cars
    .filter((car) => {
      const carMake = car.make.toLowerCase();
      const carModel = car.model.toLowerCase();
      const carYear = +car.year;
      const makeSearch = make.toLowerCase();
      const modelSearch = model.toLowerCase();
      const statusSearch = String(car.sold);

      return (
        (carMake.includes(makeSearch) || !makeSearch) &&
        (carModel.includes(modelSearch) || !modelSearch) &&
        (carYear === +year || !year) && soldStatus !== '' ?
        (statusSearch === soldSearch) : (carMake.includes(makeSearch) || !makeSearch) &&
        (carModel.includes(modelSearch) || !modelSearch) &&
        (carYear === +year || !year)
      );
    })
    .map((car) => (
      <InventoryCard
        key={car.car_id}
        car={car}
        getCars={getCars}
      />
    ));
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
            {state.isadmin === true || state.isadmin === "true"
              ? " ** Admin Inventory View ** "
              : "Quality Used Vehicles in Alamo TX"}
          </h3>
        </div>
      </div>

      <SearchBar
        cars={cars}
        setMake={setMake}
        make={make}
        setYear={setYear}
        year={year}
        model={model}
        setModel={setModel}
        soldStatus={soldStatus}
        setSoldStatus={setSoldStatus}
      />
      {state.token && state.isadmin === true || state.isadmin === "true" ? (
       <button className="add-inventory" onClick={openModal}>Add Inventory</button>
        // : ''}
      ) : ''}
     <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <AddInventoryForms cars={cars} getCars={getCars} isOpen={isModalOpen} closeModal={closeModal}></AddInventoryForms>
      </Modal>
      <div className={styles.card_container}>{carResults}</div>
      <hr className={styles.line} />
      <div
          class="elfsight-app-67d05697-7080-45d3-9152-5d696a678951"
          data-elfsight-app-lazy
        ></div>
    </div>
  );
}

export default Inventory;
