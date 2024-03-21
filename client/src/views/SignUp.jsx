import React, { useEffect } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import MyCheckbox from "../components/myCheckBox";
import MySelect from "../components/mySelect";
import MyButton from "../components/myButton";

const SignUp = () => {

    return (
        <>
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
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />
              <MySelect label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </MySelect>
              <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </MyCheckbox>
              <MyButton
              type="submit"
              text="Enviar"
              />
            </Form>
          </Formik>
        </>
      );
   
}

export default SignUp;