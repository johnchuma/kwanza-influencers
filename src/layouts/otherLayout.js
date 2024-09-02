import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/bottomNavbar";
import Navbar from "../components/navbar";
import Navbar2 from "../components/navbar2";

const OtherLayout = () => {
  return (
    <div className="h-screen">
      <div className="fixed w-full top-0">
        <Navbar2 />
      </div>
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default OtherLayout;
