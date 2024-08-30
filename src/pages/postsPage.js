import { FaDownload } from "react-icons/fa6";

export default function PostsPage() {
  return (
    <div className="flex flex-col justify-start items-center bg-white text-textColor h-screen space-y-5">
      <h3 className="font-bold my-3">Posts</h3>
      <div className="bg-white border-transparent rounded-md">
        <div className="flex justify-between">
          <h3>Job 1</h3>
          <button className="bg-primaryColor border rounded-lg text-white w-2/12 p-3">
            <FaDownload />
            Download
          </button>
        </div>
        {[
          { title: "instagram"},
          { title: "Facebook"},
          { title: "X",},
        ].map((item) => {
          return (
            <div>
              <h3 className="text-opacity-50">{item.title}</h3>
              <img src="/AdImage.svg" alt="ads"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
