export default function JobsPage(){
  return (
    <div className="bg-lightBackgroundColor h-screen">
        <div className="grid grid-cols-1 text-textColor w-11/12 mx-auto space-y-5 my-5">
            <div className="border border-darkbackgroundColor border-opacity-50 rounded-xl p-3">
                <h3 className="font-bold">Job 1</h3>
                <p className="text-mutedText">Lorem ipsum dolor sit amet consectetur. Massa volutpat luctus ut vehicula cursus consequat pretium blandit. Sagittis et dolor aliquet nisl. Dui interdum tristique vitae nisi ut viverra aliquam bibendum. Lorem quam.</p>
                <div className="flex items-center space-x-5 my-2">
                    <a className="text-textColor text-opacity-50" href="https://">Help</a>
                    <button className="bg-primaryColor border rounded-lg text-white w-2/12 p-3">Post</button>
                </div>
            </div>
        
        </div>
      
    </div>
  );
};
