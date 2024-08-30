import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SplashPage from "../pages/splashPage";
import Navbar from "../components/navbar";

const MainLayout = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    useEffect(()=>{
      setTimeout(() => {
        setShowSplashScreen(false)
      }, 3000);
    },[])
    return ( showSplashScreen?<SplashPage/>: <div>
        {/* <Navbar/> */}
        <Outlet/>
    </div> );
}
 
export default MainLayout;