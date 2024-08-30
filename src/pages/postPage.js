import Button from "../components/button";

export default function PostPage() {
  return (
    <div className="flex flex-col justify-start items-center bg-white text-textColor h-screen space-y-5">
      <div className="w-11/12 mx-auto">
        <div>
          {" "}
          <img src="/AdImage.svg" alt="ads"></img>
        </div>
        <Button />
      </div>
    </div>
  );
}
