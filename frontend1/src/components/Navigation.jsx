/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [load, setLoad] = useState(user ? true : false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
    window.location.reload();
    
  };
  console.log(load);

  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary ${styles.navigationWrapper}`}
      >
        <Container>
          <Navbar.Brand href="/">
            <h3 className={` ${styles.brandName}`}>Rent House</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/houses" className="text-white">
                House
              </Nav.Link>
              {user?.email && (
                <Nav.Link href="/dashboard" className="text-white">
                  Dashboard
                </Nav.Link>
              )}
              {user?.email ? (
                <>
                  <Button variant="danger" onClick={() => handleLogOut()}>
                    Logout
                  </Button>
                  <Nav.Link className="text-white">
                    <img
                      src={`/assets/${
                        user?.role === "Owner" ? "admin" : "user"
                      }.png`}
                      alt=""
                      width={"30px"}
                    />
                    {user.name}
                  </Nav.Link>
                </>
              ) : (
                <div className={`text-black fw-bold ${styles.loginNav}`}>
                  <>
                    {" "}
                    <span>
                      <NavLink
                        to="/login"
                        className="text-black text-decoration-none"
                      >
                        Login
                      </NavLink>
                    </span>
                    /
                    <span>
                      <NavLink
                        to="/register"
                        className="text-black text-decoration-none"
                      >
                        Register
                      </NavLink>
                    </span>
                  </>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
