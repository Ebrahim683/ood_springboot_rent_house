import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddNewHome from "./pages/Dashboard/Owner/AddNewHome";
import AllHouseList from "./pages/Dashboard/Owner/AllHouseList";
import BookedHouseList from "./pages/Dashboard/Owner/BookedHouseList";
import Home from "./pages/Home/Home";
import AllHouses from "./pages/Houses/AllHouses";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import TenantBookedHouse from "./pages/Dashboard/Tenant/TenantBookedHouse";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/admin/allHouse" element={<AllHouseList />} />
        <Route path="/dashboard/admin/addNewHouse" element={<AddNewHome />} />
        <Route
          path="/dashboard/admin/addBookedList"
          element={<BookedHouseList />}
        />
        <Route
          path="/dashboard/user/addBookedList"
          element={<TenantBookedHouse />}
        />
        <Route path="/houses" element={<AllHouses />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
