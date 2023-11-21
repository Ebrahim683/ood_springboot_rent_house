import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../Dashboard.module.css";
const Tenant = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.ownerWrapper}>
      <div>
        <Button
          className={styles.dashButton}
          onClick={() => navigate("/dashboard/user/addBookedList")}
        >
          My Rented Houses
        </Button>
      </div>
    </div>
  );
};

export default Tenant;
