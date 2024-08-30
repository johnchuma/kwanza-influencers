import Button from "../components/button";
import { IoCallOutline } from "react-icons/io5";

export default function callPage() {
  return (
      <div className="w-6/12 text-textColor space-y-5 my-5">
        <div>
          <p className="text-textColor text-center text-opacity-50">
            Contact Kwanza for more clarifications on this campaign
          </p>
        </div>
        <div>
          <IoCallOutline />
          <Button />
        </div>
      </div>
  );
}
