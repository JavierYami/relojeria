import { Formik, Form} from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/myTextInput";
import MyCheckbox from "../components/myCheckBox";
import MySelect from "../components/mySelect";
import MyButton from "../components/myButton";

const SignUp = () => {

    return (
        <div className="w-2/6 flex flex-col justify-center items-center gap-3 bg-gray-100">
          <h1>Registrate</h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              acceptedTerms: false,
              jobType: ""
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email addresss`")
                .required("Required"),
              acceptedTerms: Yup.boolean()
                .required("Required")
                .oneOf([true], "You must accept the terms and conditions."),
              jobType: Yup.string()
                .oneOf(
                  ["designer", "development", "product", "other"],
                  "Invalid Job Type"
                )
                .required("Required")
            })}
            onSubmit={async (values, { setSubmitting }) => {
              await new Promise(r => setTimeout(r, 500));
              setSubmitting(false);
            }}
          >
            <Form>
              <MyTextInput
                label="Nombre"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
              <MyTextInput
                label="Apellido"
                name="lastName"
                type="text"
                placeholder="Jane"
              />
              <MyButton
              type="submit"
              text="Enviar"
              />
            </Form>
          </Formik>
        </div>
      );
   
}

export default SignUp;