import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/bottomNavbar";
import Navbar from "../components/navbar";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <div className="fixed w-full top-0">
        <Navbar />
      </div>
      <div className="mt-16">
        <Outlet />
      </div>
      <div className="fixed w-full bottom-0">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default AppLayout;
