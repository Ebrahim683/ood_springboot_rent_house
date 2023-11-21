/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import styles from "../Dashboard.module.css";

const successNotify = () => toast.success("Successfully Added!");
const AddNewHome = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const postData = (data) => {
    fetch(
      `http://localhost:8080/api/addHouse?name=${data?.name}&image=${
        data?.image
      }&fee=${data?.fee}&status=${`Available`}&location=${
        data?.location
      }&ownerNumber=${data?.ownerNumber}`,
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
        if (data?.msg === "success") {
          successNotify();
          reset();
        }
      });
  };

  const onSubmit = (data) => {
    postData(data);
    console.log(data);
  };

  return (
    <div className={`${styles.login_content} ${styles.wrapper}`}>
      <Toaster position="top-center" reverseOrder={false} />
      <Container className="d-flex justify-content-center align-items-center py-5">
        <Card className={styles.card_wrapper}>
          <Card.Body>
            <Card.Title className="text-white text-center">
              Add new Empty House
            </Card.Title>
            <form
              className={styles.loginForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="" className="text-white">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className={styles.inputField}
              />{" "}
              <br />
              <label htmlFor="" className="text-white">
                Image
              </label>
              <input
                type="text"
                {...register("image", { required: true })}
                className={styles.inputField}
              />{" "}
              <br />
              <label htmlFor="" className="text-white">
                Fee
              </label>
              <input
                type="text"
                {...register("fee", { required: true })}
                className={styles.inputField}
              />{" "}
              <br />
              <label htmlFor="" className="text-white">
                Location
              </label>
              <input
                {...register("location", { required: true })}
                className={styles.inputField}
              />
              <br />
              <label htmlFor="" className="text-white">
                Owner Number
              </label>
              <input
                {...register("ownerNumber", { required: true })}
                className={styles.inputField}
              />
              <input
                type="submit"
                className={`${styles.inputField} ${styles.submitBtn}`}
              />
            </form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AddNewHome;
