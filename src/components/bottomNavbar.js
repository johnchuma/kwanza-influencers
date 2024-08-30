export default function BottomNavbar(){
    return(
        <div className="flex justify-between bg-lightBackgroundColor text-white space-x-3 p-3">
           <div className="flex flex-col"><img src="/home.svg"></img><p className="text-textColor">Home</p></div>
           <div className="flex flex-col"><img src="/job-search.svg"></img><p className="text-textColor">Jobs</p></div>
           <div className="flex flex-col"><img src="/notification.svg"></img><p className="text-textColor">Profile</p></div>
        </div>
    )
    };