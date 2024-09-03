import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/button";
import { getInfluencerInfo } from "../controllers/influencerController";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthInfo } from "../utils/localStorageFunctions";
import Loader from "../components/loader";
import NoData from "../components/noData";

export default function ProfileUpdate() {
  const validationSchema = Yup.object({
    email: Yup.string().email().required("put valid email"),
    password: Yup.string().required("fill password"),
  });
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = getAuthInfo();
    getInfluencerInfo(data.id).then((response) => {
      const data = response.data.data;
      console.log("influencer data", data);
      setData(data);
      setLoading(false);
      console.log(response);
    });
  }, []);

  return loading ? (
    <Loader />
  ) : data == null ? (
    <NoData />
  ) : (
    <Formik
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
      initialValues={{
        name: data.user.name,
        email: data.user.email,
        facebook: data.influencerDetails.facebook_url,
        twitter: data.influencerDetails.twitter_url,
        instagram: data.influencerDetails.instagram_url,
        youtube: "",
        website: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className="flex flex-col justify-start items-center bg-lightBackgroundColor text-textColor h-screen space-y-5">
          <div className="w-11/12 ">
            {" "}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Name</label>
                <input
                  className="light-input-style"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Full name"
                />
                {errors.name && touched.name && (
                  <p className="text-red-600 text-xs">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Email Address</label>
                <input
                  className="light-input-style"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="smartcodes@smartafrica.group"
                />
                {errors.email && touched.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Facebook URL</label>
                <input
                  className="light-input-style"
                  name="social"
                  value={values.facebook}
                  onChange={handleChange}
                />
                {errors.social && touched.social && (
                  <p className="text-red-600 text-xs">{errors.social}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Twitter URL</label>
                <input
                  className="light-input-style"
                  name="social"
                  value={values.twitter}
                  onChange={handleChange}
                />
                {errors.social && touched.social && (
                  <p className="text-red-600 text-xs">{errors.social}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Instagram URL</label>
                <input
                  className="light-input-style"
                  name="social"
                  value={values.instagram}
                  onChange={handleChange}
                />
                {errors.social && touched.social && (
                  <p className="text-red-600 text-xs">{errors.social}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Youtube URL</label>
                <input
                  className="light-input-style"
                  name="social"
                  value={values.youtube}
                  onChange={handleChange}
                />
                {errors.social && touched.social && (
                  <p className="text-red-600 text-xs">{errors.social}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Website URL</label>
                <input
                  className="light-input-style"
                  name="social"
                  value={values.website}
                  onChange={handleChange}
                />
                {errors.social && touched.social && (
                  <p className="text-red-600 text-xs">{errors.social}</p>
                )}
              </div>
              <div className="mt-4">
                <Button text={"Save"} />
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
