import { useEffect, useState } from "react";
import { AiOutlineBackward } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar2() {
  const [pageTitle, setPageTitle] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setPageTitle(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <div className=" bg-darkbackgroundColor w-full 2xl:w-3/12">
      <div className="flex justify-start space-x-5 w-11/12 mx-auto py-2  text-lg items-center text-white ">
        <div>
          <BsArrowLeft
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className="capitalize">{pageTitle == "" ? "Home" : pageTitle}</div>
        {/* <a href="/login">login</a> */}
      </div>
    </div>
  );
}
