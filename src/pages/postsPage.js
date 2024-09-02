import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthInfo } from "../utils/localStorageFunctions";
import { getGigPosts } from "../controllers/gigController";
import Loader from "../components/loader";

export default function PostsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = getAuthInfo();
    console.log(data);
    setLoading(true);
    getGigPosts(id).then((response) => {
      console.log(response);
      setLoading(false);
      setData(response.data.data);
    });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col justify-start items-center bg-lightBackgroundColor text-textColor h-screen ">
      <div className="  w-11/12 mx-auto rounded-md">
        <div className="space-y-4">
          {data.length < 1 ? (
            <div>
              <h1 className="text-mutedText text-center">No Data Available</h1>
            </div>
          ) : (
            data.map((item) => {
              return (
                <div className="bg-white  p-3 border rounded-lg border-black border-opacity-10">
                  <div className="flex justify-between items-center w-full">
                    <h3>{item.title}</h3>
                    <button className="bg-primaryColor border rounded-lg text-white flex justify-center text-sm items-center space-x-1 py-2 px-3">
                      <div>
                        <AiOutlineDownload />
                      </div>
                      <a
                        download={item.image_url.split("/posts/").pop()}
                        href={item.image_url}
                      >
                        Download
                      </a>
                    </button>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/post/3");
                    }}
                  >
                    <img
                      src={item.image_url}
                      className="w-full rounded-lg mt-3"
                      alt="ads"
                    ></img>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
