/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "../Dashboard.module.css";
import { Container } from "react-bootstrap";
import SingleHouseCard from "../../Houses/SingleHouseCard";

const AllHouseList = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [houses, setHouses] = useState([]);
console.log(user);
  useEffect(() => {
    fetch(
      `http://localhost:8080/api/ownerHouseList?ownerNumber=${user?.number}`
    )
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className="py-5">
          <h1 className="h1 text-bold text-center ">All Houses of</h1>
          <h3 className="h3 text-bold text-center ">{user?.name}</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {houses?.map((house) => (
            <>
              {" "}
              <SingleHouseCard house={house} />
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllHouseList;
