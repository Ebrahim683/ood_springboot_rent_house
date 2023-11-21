/* eslint-disable no-unused-vars */
import { Button, Card, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const successNotify = () => toast.success("Successfully Login!");
const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm();
  /* rules regulation
 
*/
  const postData = (data) => {
    fetch(
      `http://localhost:8080/api/loginUser?number=${data?.number}&password=${data?.password}`,
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
        successNotify();

        if (data?.email) {
          // To set an item in local storage
          localStorage.setItem("user", JSON.stringify(data));

          successNotify();
          reset();
          navigate("/");
        }
        window.location.reload();
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
          <Card.Title className="text-white text-center">Login</Card.Title>
          <Form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Enter number"
                  />
                )}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                )}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
