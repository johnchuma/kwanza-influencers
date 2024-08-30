import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SplashPage from "../pages/splashPage";

const MainLayout = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    useEffect(()=>{
      setTimeout(() => {
        setShowSplashScreen(false)
      }, 4000);
    },[])
    return ( showSplashScreen?<SplashPage/>: <div>
        <Outlet/>
    </div> );
}
 
export default MainLayout;