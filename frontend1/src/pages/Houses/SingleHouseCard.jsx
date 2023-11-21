/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styles from "./House.module.css";
import ModalComponent from "./ModalComponent";

const successNotify = () => toast.success("Successfully Booked!");
const errorNotify = () => toast.error("Something went wrong !");
const SingleHouseCard = ({ house }) => {
  const [data, setData] = useState({});
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postBookData = () => {
    fetch(
      `http://localhost:8080/api/bookHouse?ownerNumber=${data?.ownerNumber}&renterNumber=${data?.renterNumber}&houseId=${data?.houseId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data?.msg) {
          successNotify();
        } else {
          errorNotify();
        }
      });
  };

  const handleBook = (data) => {
    setData(data);
    if (!user?.email) {
      navigate("/login");
    } else {
      handleShow();
    }
  };

  return (
    <>
      <div className="col">
        <Toaster position="top-center" reverseOrder={false} />

        <ModalComponent
          handleClose={handleClose}
          handleShow={handleClose}
          show={show}
          fee={house?.fee}
          postBookData={postBookData}
        />
        <div className="card">
          <img
            src="/assets/rent-house.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{house?.name}</h5>

            <p className="card-text">
              Nature-inspired room in rent house project features earthy tones,
              wooden accents, and large windows for a serene, immersive
              experience amidst the natural surroundings.
            </p>
            <p className="card-text">Owner Contact: {house?.ownerNumber}</p>
            <p className="card-text">Location:{house?.location}</p>
            <p className="card-text">
              {" "}
              <b>Rental: </b> {house?.fee} <b>Status: </b> {house?.status}{" "}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-around">
            <button
              type="button"
              className={`btn btn-success ${styles.btn_2}`}
              onClick={() =>
                handleBook({
                  ownerNumber: house?.ownerNumber,
                  renterNumber: user?.number,
                  houseId: house?.id,
                })
              }
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHouseCard;
