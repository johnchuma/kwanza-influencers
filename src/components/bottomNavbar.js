import { TbShoppingBagSearch, TbSmartHome } from "react-icons/tb";
import { VscBell } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNavbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-white text-white text-sm fixed w-full 2xl:w-3/12 bottom-0 ">
      <div className="flex justify-between w-11/12  mx-auto space-x-3 p-3">
        {[
          {
            title: "Home",
            path: "/",
            icon: <TbSmartHome />,
          },
          {
            title: "Jobs",
            path: "/jobs",
            icon: <TbShoppingBagSearch />,
          },
          {
            title: "Profile",
            path: "/profile",
            icon: <VscBell />,
          },
        ].map((item) => {
          return (
            <div
              onClick={() => {
                navigate(item.path);
              }}
              className={`flex flex-col items-center ${
                pathname == item.path ? "text-primaryColor" : " text-textColor"
              } `}
            >
              <div className=" text-xl">{item.icon}</div>
              <p className="">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
