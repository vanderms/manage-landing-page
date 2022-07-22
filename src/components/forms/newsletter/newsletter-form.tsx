import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export const NewsletterForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={yup.object({
        email: yup
          .string()
          .email("Please insert a valid email")
          .required("Please insert a valid email"),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className="grid grid-cols-[1fr,5rem] gap-2  ">
        <label>
          <span className="sr-only">Insert your email to get updates in your inbox</span>
          <Field
            name="email"
            type="text"
            placeholder="Updates in your inbox"
            className="h-11  w-full rounded-full text-[0.875rem] text-neutral-800 px-6 "
          />
          <span className="text-danger text-[0.8125rem] mt-4 ml-4">
            <ErrorMessage name="email" />
          </span>
        </label>
        <button
          type="submit"
          className="w-20 h-11 rounded-full bg-primary hover:bg-primary-300 text-neutral-50 text-[0.9375rem] font-bold"
        >
          Go
        </button>
      </Form>
    </Formik>
  );
};
