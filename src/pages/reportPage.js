import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/button";

export default function Report() {
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
            <h2 className="font-bold">Reports</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Campaign name</label>
                <input
                  className="lightInput-style"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Campaign name"
                />
                {/* <div className="absolute left-4"><AiOutlineMail /></div> */}
                {errors.email && touched.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Report</label>
                <input
                  className="lightInput-style"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Date of Post DD/MM/YYYY"
                />
                {/* <div className="absolute left-4"><RiLockPasswordLine /></div> */}
                {errors.password && touched.password && (
                  <p className="text-red-600 text-xs">{errors.password}</p>
                )}
              </div>
              <div className="flex flex-col my-2">
                <label className="text-sm pb-2">Screenshot</label>
                <input
                  className="lightInput-style"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Screenshot"
                />
                {/* <div className="absolute left-4"><RiLockPasswordLine /></div> */}
                {errors.password && touched.password && (
                  <p className="text-red-600 text-xs">{errors.password}</p>
                )}
              </div>
              <Button />
              <button className="border border-darkbackgroundColor border-opacity-50 bg-transparent rounded-xl w-full text-textColor font-bold my-2 p-3">
                Review
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
