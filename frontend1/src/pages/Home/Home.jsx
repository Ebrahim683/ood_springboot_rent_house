/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import SingleHouseCard from "../Houses/SingleHouseCard";
import styles from "./Home.module.css";
const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/getHouseList")
      .then((res) => res.json())
      .then((data) => setHouses(data?.slice(-3)));
  }, []);
  return (
    <>
      <header className="heroSection">
        <div className={styles.hero_content_wrapper}>
          <div className={`container ${styles.hero_content}`}>
            <h3 className={`display-1 fw-bold ${styles.heroText}`}>
              Lets Find Your Perfect House
            </h3>
            <p className={`fs-3 ${styles.hero_details}`}>
              Welcome to Rent House, where we simplify the rental process.
              Browse through our diverse selection of homes, and let us guide
              you to your next abode. Your dream rental is just a click away
            </p>
          </div>
        </div>
      </header>
      <>
        <main className="recent-post-wrapper py-5">
          <div className="container-xxl">
            <h1 className="h1  text-center recent-title pb-5">Recent Post</h1>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {houses?.map((house) => (
                <SingleHouseCard house={house} />
              ))}
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default Home;
