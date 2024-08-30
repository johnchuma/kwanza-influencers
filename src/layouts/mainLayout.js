import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SplashPage from "../pages/splashPage";
import Navbar from "../components/navbar";
import BottomNavbar from "../components/bottomNavbar";

const MainLayout = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    useEffect(()=>{
      setTimeout(() => {
        setShowSplashScreen(false)
      }, 3000);
    },[])
    return ( showSplashScreen?<SplashPage/>: <div className="bg-lightBackgroundColor min-h-screen">
        {/* <Navbar/> */}
        <Outlet/>
        {/* <BottomNavbar/> */}
    </div> );
}
 
export default MainLayout;