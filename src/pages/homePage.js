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
import Loader from "../components/loader";

const HomePage = () => {
  const [stats, setStats] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const data = getAuthInfo();
    console.log(data);
    setLoading(true);
    getInfluencerInfo(data.id).then((response) => {
      const data = response.data.data;
      console.log("influencer data", data);

      setData(data);
      setLoading(false);
      console.log(response);
    });
  }, []);
  return loading ? (
    <Loader />
  ) : data == null ? (
    <>
      <h1>No Data</h1>
    </>
  ) : (
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
              {
                title: "Likes",
                icon: <FiFacebook />,
                value: data.influencerDetails.facebook_likes,
              },
              {
                title: "Likes",
                icon: <FaInstagram />,
                value: data.influencerDetails.instagram_followers,
              },
              {
                title: "Followers",
                icon: <BsTwitterX />,
                value: data.influencerDetails.twitter_followers,
              },
              {
                title: "Viewers",
                icon: <AiOutlineYoutube />,
                value: "38,500",
              },
              {
                title: "Audience",
                icon: <LuGlobe />,
                value: data.influencerDetails.visitors,
              },
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
