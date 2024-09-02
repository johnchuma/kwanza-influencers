import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Navbar from "../components/navbar";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { MdWeb, MdYoutubeSearchedFor } from "react-icons/md";
import { LuGlobe } from "react-icons/lu";
import BottomNavbar from "../components/bottomNavbar";
import { useEffect, useState } from "react";
import { getAuthInfo } from "../utils/localStorageFunctions";
import {
  getGigs,
  getInfluencerInfo,
} from "../controllers/influencerController";
import { AiOutlineYoutube } from "react-icons/ai";

const HomePage = () => {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const data = getAuthInfo();
    console.log(data);
    // getInfluencerInfo(data.id).then((response) => {
    //   console.log(response);
    // });
  }, []);
  return (
    <div className="min-h-screen">
      <div className="w-11/12 mx-auto space-y-2 py-0">
        <div className="grid grid-cols-3 gap-2 bg-white rounded-lg p-2">
          <div className="flex flex-col border-r">
            <p className="text-mutedText text-sm">Total Posts</p>
            <p className="font-bold">100</p>
          </div>
          <div className="flex flex-col   ">
            <p className="text-mutedText text-sm">Total Amount</p>
            <p className="font-bold">TZS 150,000</p>
          </div>
          <div className="flex flex-col px-2 border-l">
            <p className="text-mutedText text-sm">Amount Paid</p>
            <p className="font-bold">TZS 100,000</p>
          </div>
        </div>
        <div className="py-5">
          <h3 className="py-2">Profile Connected</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Likes", icon: <FiFacebook />, value: "38,500" },
              { title: "Likes", icon: <FaInstagram />, value: "38,500" },
              { title: "Followers", icon: <BsTwitterX />, value: "5500" },
              {
                title: "Viewers",
                icon: <AiOutlineYoutube />,
                value: "38,500",
              },
              { title: "Audience", icon: <LuGlobe />, value: "38,500" },
            ].map((item) => {
              return (
                <div className="border border-transparent bg-white rounded-md p-2">
                  <div className="flex justify-between py-3 items-center">
                    <div className="bg-lightBackground border-transparent rounded-xl p-3">
                      {item.icon}
                    </div>
                    <div className="text-mutedText">
                      <HiDotsVertical />
                    </div>
                  </div>
                  <div className="flex flex-col py-3">
                    <p className="text-mutedText text-sm">{item.title}</p>
                    <p className="font-bold text-2xl">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
