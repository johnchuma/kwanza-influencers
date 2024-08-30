import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto space-y-2 py-5">
      <div className="grid grid-cols-3 bg-white rounded-lg p-2">
        <div className="flex flex-col">
          <p className="text-mutedText">Total Posts</p>
          <p className="font-bold">100</p>
        </div>
        <div className="flex flex-col border-x-2 px-2">
          <p className="text-mutedText">Total Posts</p>
          <p className="font-bold">100</p>
        </div>
        <div className="flex flex-col px-2">
          <p className="text-mutedText">Total Posts</p>
          <p className="font-bold">100</p>
        </div>
      </div>
      <div className="py-5">
        <h3 className="py-2">Profile Connected</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { title: "likes", icon: <FaFacebook />, value: "38,500" },
            { title: "Followers", icon: <FaInstagram />, value: "38,500" },
            { title: "Followers", icon: <FaTwitter />, value: "5500" },
            { title: "Visitors", icon: <FaFacebook />, value: "38,500" },
            { title: "Audience", icon: <FaFacebook />, value: "38,500" }
          ].map((item) => {
            return (
              <div className="border border-transparent bg-white rounded-md p-2">
                <div className="flex justify-between py-3">
                  <div className="bg-mutedText border-transparent rounded-xl p-2">
                    {item.icon}
                  </div>
                  <div>
                    <HiDotsVertical />
                  </div>
                </div>
                <div className="flex flex-col py-3">
                  <p className="text-mutedText text-sm">{item.title}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
