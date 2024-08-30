const HomePage = () => {
  return (
    <div className="p-3">
      <div className="flex space-x-2">
        <div className="flex flex-col">
          <p className="text-mutedText">Total Posts</p>
          <p className="font-bold">100</p>
        </div>
        <div className="flex flex-col">
          <p className="text-mutedText">Total Posts</p>
          <p className="font-bold">100</p>
        </div>
        <div className="flex flex-col">
          <p className="text-mutedText">Total Posts</p>
          <p className="font-bold">100</p>
        </div>
      </div>
      <div className="py-5">
        <h3>Profile Connected</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-transparent rounded-md p-2">
            <div className="flex justify-between">
              <div className="bg-mutedText border-transparent rounded-xl">lo</div>
              <div>m</div>
            </div>
            <div className="flex flex-col">
              <p className="text-mutedText text-sm">likes</p>
              <p className="font-bold">38,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
