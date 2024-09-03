import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { login } from "../controllers/authController";
import { useState } from "react";
import { setAuthInfo } from "../utils/localStorageFunctions";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string().email().required("put valid email"),
    password: Yup.string().required("fill password"),
  });

  return (
    <div className="w-full 2xl:w-3/12 mx-auto">
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const payload = {
            email: values.email,
            password: values.password,
          };
          setUploading(true);
          login(payload)
            .then((response) => {
              console.log("Payload info", response);
              console.log("response", response.data);
              setAuthInfo(response.data);
              navigate("/");
              setUploading(false);
            })
            .catch((e) => {
              toast("Wrong email or password");
              setUploading(false);
            });
        }}
        initialValues={{ email: "", password: "" }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <div className="h-screen bg-darkbackgroundColor">
            <div className="flex flex-col justify-center items-center bg-darkbackgroundColor text-white h-5/6 ">
              <div className="w-10/12">
                <FollowersExtractor
                  url={"https://www.instagram.com/stories/josh_cleopa/"}
                />
                <div className="flex justify-center py-5">
                  <img src={"/KwanzaLogo.svg"} alt="App-logo" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col my-2">
                    <label className="text-sm pb-2">Email Address</label>
                    <div className="relative ">
                      <input
                        className="input-style absolute  "
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                      />
                      <div className="absolute top-2 bottom-0 right-3">
                        <AiOutlineMail />
                      </div>
                    </div>
                    {errors.email && touched.email && (
                      <p className="text-red-600 text-xs">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-14">
                    <label className="text-sm pb-2">Password</label>
                    <div className="relative ">
                      <input
                        className="input-style absolute"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                      />
                      <div className="absolute right-3 top-2">
                        <RiLockPasswordLine />
                      </div>
                    </div>
                    {errors.password && touched.password && (
                      <p className="text-red-600 text-xs">{errors.password}</p>
                    )}
                  </div>
                  <div className="mt-16">
                    <Button loading={uploading} text={"Login"} />
                    <div className="text-red-400 text-center ">
                      <ToastContainer />
                    </div>
                  </div>
                </form>
                <div className="text-center">
                  {" "}
                  <a
                    className="text-white text-opacity-60 text-sm"
                    href="https://"
                  >
                    by creating an account, you agree to our’s{" "}
                    <span className="underline">Privacy Policy</span> and{" "}
                    <span className="underline"> Terms of Use.</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
