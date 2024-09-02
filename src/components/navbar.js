import { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import { AiOutlineClose } from "react-icons/ai";
import { setAuthInfo } from "../utils/localStorageFunctions";

export default function Navbar() {
  const [pageTitle, setPageTitle] = useState("");
  const { pathname } = useLocation();
  const [showmenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setPageTitle(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <div>
      {showmenu && (
        <div className="fixed inset-0 bg-black bg-opacity-20">
          <div className="h-screen w-8/12 bg-white p-6">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={() => {
                  setShowMenu(false);
                }}
                className="text-mutedText"
              />
            </div>
            {/* <h1 className="">Menu</h1> */}
            <div className="mt-12" />
            <Button
              text={"Customer Support"}
              onClick={() => {
                navigate("/support");
                setShowMenu(false);
              }}
            />
            <h1
              onClick={() => {
                setAuthInfo(null);
                navigate("/login");
                setShowMenu(false);
              }}
              className=" text-mutedText text-center"
            >
              Logout
            </h1>
          </div>
        </div>
      )}
      <div className=" bg-darkbackgroundColor w-full 2xl:w-3/12">
        <div className="flex justify-start space-x-4 w-11/12 mx-auto py-2  text-lg items-center text-white ">
          <div>
            <CgMenuLeft
              onClick={() => {
                setShowMenu(true);
              }}
            />
          </div>
          <div className="capitalize">
            {pageTitle == "" ? "Home" : pageTitle}
          </div>
          {/* <a href="/login">login</a> */}
        </div>
      </div>
    </div>
  );
}
