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
      initialValues={{ name: "", phone: "", email: "", social: "" }}
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
                <label className="text-sm pb-2">Phone Number</label>
                <input
                  className="light-input-style"
                  value={values.phone}
                  name="phone"
                  onChange={handleChange}
                  placeholder="+255 123 456 789"
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-600 text-xs">{errors.phone}</p>
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
                <label className="text-sm pb-2">Social media</label>
                <input
                  className="light-input-style"
                  name="social"
                  value={values.social}
                  onChange={handleChange}
                  placeholder="Twitter"
                />
                {errors.social && touched.social && (
                  <p className="text-red-600 text-xs">{errors.social}</p>
                )}
              </div>
              <Button text={"Save"} />
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
