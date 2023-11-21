/* eslint-disable no-unused-vars */
import { useState } from "react";
import Owner from "./Owner/Owner";
import Tenant from "./Tenant/Tenant";
import styles from "./Dashboard.module.css"

const Dashboard = () => {
    const retrievedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(retrievedUser);
    return (
      <div className={styles.wrapper}>
        {user?.role === "Owner" ? <Owner /> : <Tenant />}
      </div>
    );
};

export default Dashboard;