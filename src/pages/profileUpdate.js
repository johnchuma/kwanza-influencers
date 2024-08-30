import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/button";

export default function ProfileUpdate() {
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
        <div className="flex flex-col justify-start items-center bg-lightBackgroundColor text-textColor h-screen space-y-5">
          <div className="w-10/12 my-5">
            {" "}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Name</label>
                <input
                  className="lightInput-style"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Full name"
                />
                {/* <div className="absolute left-4"><AiOutlineMail /></div> */}
                {errors.email && touched.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Phone Number</label>
                <input
                  className="lightInput-style"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="+255 123 456 789"
                />
                {/* <div className="absolute left-4"><RiLockPasswordLine /></div> */}
                {errors.password && touched.password && (
                  <p className="text-red-600 text-xs">{errors.password}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Email Address</label>
                <input
                  className="lightInput-style"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="smartcodes@smartafrica.group"
                />
                {/* <div className="absolute left-4"><AiOutlineMail /></div> */}
                {errors.email && touched.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Social media</label>
                <input
                  className="lightInput-style"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Twitter"
                />
                {/* <div className="absolute left-4"><AiOutlineMail /></div> */}
                {errors.email && touched.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
              </div>
              <Button />
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

  