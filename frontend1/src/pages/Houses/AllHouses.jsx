import { useEffect, useState } from "react";
import styles from "./House.module.css";
import SingleHouseCard from "./SingleHouseCard";
const AllHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/getHouseList")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  console.log(houses);
  return (
    <div className={`container py-4 ${styles.allHouse_wrapper}`}>
      <h1 className="display-5 pb-5 text-center fw-bold ">All Houses</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {houses?.map((house) => (
          <>
            {" "}
                <SingleHouseCard house={house } />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllHouses;
