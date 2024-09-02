import Button from "../components/button";
import { IoCallOutline } from "react-icons/io5";

export default function CallPage() {
  return (
    <div className="w-11/12 mx-auto text-textColor space-y-5 my-5">
      <div>
        <p className="text-textColor text-center text-opacity-50">
          Contact Kwanza for more clarifications on this campaign
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            window.location = "tel:+255786520788";
          }}
          text={"Call Us"}
        />
        <p className="text-mutedText text-center text-opacity-50">or</p>
        <Button
          onClick={() => {
            window.location = "https://wa.me/255786520788";
          }}
          text={"Check us on Whatsapp"}
        />
      </div>
    </div>
  );
}
