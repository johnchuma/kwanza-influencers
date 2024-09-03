import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthInfo } from "../utils/localStorageFunctions";
import { getInfluencerInfo } from "../controllers/influencerController";
import { getGigs } from "../controllers/gigController";
import Loader from "../components/loader";
import NoData from "../components/noData";

export default function JobsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = getAuthInfo();
    console.log(data);
    setLoading(true);
    getInfluencerInfo(data.id).then((response) => {
      const data = response.data.data;
      console.log("influencer data", data);

      setData(data.gig);
      setLoading(false);
      console.log(response);
    });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-1 text-textColor w-11/12 mx-auto space-y-5 my-5">
      {data.length < 1 ? (
        <NoData />
      ) : (
        data.map((item) => {
          return (
            <div className="border border-darkbackgroundColor  bg-white border-opacity-10 rounded-lg p-3">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-mutedText">{item.description}</p>
              <div className="flex items-center space-x-5 my-2">
                <a className="text-textColor text-opacity-50" href="/support">
                  Help
                </a>
                <button
                  onClick={() => {
                    navigate(`/posts/${item.id}`);
                  }}
                  className="bg-primaryColor border text-sm rounded-lg text-white w-3/12 py-2 px-3"
                >
                  Posts
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
