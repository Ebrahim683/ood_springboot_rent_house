import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../Dashboard.module.css";
const Owner = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.ownerWrapper}>
      <div>
        <Button
          className={styles.dashButton}
          onClick={() => navigate("/dashboard/admin/addNewHouse")}
        >
          Add New House
        </Button>
        <Button
          className={styles.dashButton}
          onClick={() => navigate("/dashboard/admin/allHouse")}
        >
          ALL House List
        </Button>
        <Button
          className={styles.dashButton}
          onClick={() => navigate("/dashboard/admin/addBookedList")}
        >
          Booked House List
        </Button>
      </div>
    </div>
  );
};

export default Owner;
