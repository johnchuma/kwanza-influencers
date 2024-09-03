import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button";
import { useEffect, useState } from "react";
import { getAuthInfo } from "../utils/localStorageFunctions";
import { getGigPost, getGigPosts } from "../controllers/gigController";
import Loader from "../components/loader";

export default function PostPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const data = getAuthInfo();
    console.log(data);
    getGigPost(id).then((response) => {
      setLoading(false);
      console.log(response);
      setData(response.data.data);
    });
  }, []);
  return loading ? (
    <Loader />
  ) : data == null ? (
    <div className="">
      <h1 className="text-mutedText text-center">No Data Available</h1>
    </div>
  ) : (
    <div className="flex flex-col justify-start items-center bg-white text-textColor h-screen space-y-5">
      <div className="w-11/12 mx-auto">
        <div>
          {" "}
          <img
            src={data.image_url}
            className="w-full rounded-lg "
            alt="ads"
          ></img>
        </div>
        <a></a>
        <Button text={"Share"} />
      </div>
    </div>
  );
}
