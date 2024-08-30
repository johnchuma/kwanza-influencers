import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/button";

export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().email().required("put valid email"),
    password: Yup.string().required("fill password"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
      initialValues={{ email: "", password: "" }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className="flex flex-col justify-center items-center bg-darkbackgroundColor text-white h-screen space-y-5">
          <div className="w-10/12">
            {" "}
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
                <div className="absolute top-2 bottom-0 right-3"><AiOutlineMail /></div>
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
                  onChange={handleChange}
                  placeholder="Password"
                />
                <div className="absolute right-3 top-2"><RiLockPasswordLine /></div>
                </div>
                {errors.password && touched.password && (
                  <p className="text-red-600 text-xs">{errors.password}</p>
                )}
              </div>
             <div className="mt-12">
             <Button />
             </div>
            </form>
            <div className="text-center">
              {" "}
              <a className="text-white text-opacity-60 text-sm" href="https://">
                by creating an account, you agree to our’s{" "}
                <span className="underline">Privacy Policy</span>
                {" "}and <span className="underline"> Terms of Use.</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
