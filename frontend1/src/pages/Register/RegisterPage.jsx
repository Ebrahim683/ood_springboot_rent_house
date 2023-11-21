/* eslint-disable no-unused-vars */
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import styles from "../Login/Login.module.css";
const successNotify = () => toast.success("Successfully Registered!");
const RegisterPage = () => {
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
      `http://localhost:8080/api/registerUser?name=${data?.name}&email=${data?.email}&number=${data?.number}&role=${data?.role}&password=${data?.password}`,
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
    <div className={styles.login_wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      <Card className={styles.login_content}>
        <Card.Body>
          <Card.Title className="text-white text-center">
            Register Here
          </Card.Title>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <select {...register("role")} className={styles.inputField}>
              <option value="">Role</option>
              <option value="Owner">Owner</option>
              <option value="Tenant">Tenant</option>
            </select>{" "}
            <br />
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              className={styles.inputField}
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className={styles.inputField}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className={styles.inputField}
            />{" "}
            <br />
            <input
              placeholder="Phone number"
              {...register("number", { required: true })}
              className={styles.inputField}
            />
            <input
              type="submit"
              className={`${styles.inputField} ${styles.submitBtn}`}
            />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterPage;
