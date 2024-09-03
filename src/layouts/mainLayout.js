import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SplashPage from "../pages/splashPage";
import Navbar from "../components/navbar";
import BottomNavbar from "../components/bottomNavbar";
import { getAuthInfo } from "../utils/localStorageFunctions";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const data = getAuthInfo();
    if (data) {
      console.log("Data", data);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    // showSplashScreen?<SplashPage/>:
    <div>
      <ToastContainer />
      <div className="bg-lightBackgroundColor min-h-screen w-full 2xl:w-3/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
