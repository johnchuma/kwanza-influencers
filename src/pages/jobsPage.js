export default function JobsPage() {
  return (
    <div className="grid grid-cols-1 text-textColor w-11/12 mx-auto space-y-5 my-5">
      {[
        {
          title: "Job 1",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa volutpat luctus ut vehicula cursus consequat pretium blandit. Sagittis et dolor aliquet nisl. Dui interdum tristique vitae nisi ut viverra aliquam bibendum. Lorem quam.",
        },
        {
          title: "Job 2",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa volutpat luctus ut vehicula cursus consequat pretium blandit. Sagittis et dolor aliquet nisl. Dui interdum tristique vitae nisi ut viverra aliquam bibendum. Lorem quam.",
        },
        {
          title: "Job 3",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa volutpat luctus ut vehicula cursus consequat pretium blandit. Sagittis et dolor aliquet nisl. Dui interdum tristique vitae nisi ut viverra aliquam bibendum. Lorem quam.",
        },

      ].map((item) => {
        return (
          <div className="border border-darkbackgroundColor bg-white border-opacity-50 rounded-xl p-3">
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-mutedText">{item.description}</p>
            <div className="flex items-center space-x-5 my-2">
              <a className="text-textColor text-opacity-50" href="https://">
                Help
              </a>
              <button className="bg-primaryColor border rounded-lg text-white w-3/12 p-3">
                Posts
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
