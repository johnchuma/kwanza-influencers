export default function MenuPage() {
  return (
      <div className="w-10/12 mx-auto space-y-5 h-screen py-5">
        <button className="border border-transparent bg-primaryColor rounded-xl w-full text-white font-bold my-3 p-3">
          Profile
        </button>
        <button className="border border-transparent bg-primaryColor rounded-xl w-full text-white font-bold my-3 p-3">
          Reports
        </button>
        <button className="border border-transparent bg-primaryColor rounded-xl w-full text-white font-bold my-3 p-3">
          Logout
        </button>
        <div className="absolute inset-x-0 bottom-0 my-3">
          <p className="flex justify-center text-textColor text-opacity-50">
            Kwanza Influencer
          </p>
        </div>
      </div>
  );
}
