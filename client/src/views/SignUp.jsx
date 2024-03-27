import { Formik, Form} from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/myTextInput";
import MyCheckbox from "../components/myCheckBox";
import MySelect from "../components/mySelect";
import MyButton from "../components/myButton";

const SignUp = () => {

    return (
        <div className="w-2/6 flex flex-col justify-center items-center bg-gray-50 p-5 py-14 border border-gray-100 text-gray-950 rounded">
          <h1 className="text-2xl text-gray-950 mb-3">Regístrate</h1>
          <div className="border-t w-full mb-3"></div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password:"",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, "Deben ser 15 caracteres o menos")
                .required("Requerido"),
              lastName: Yup.string()
                .max(20, "Deben ser 20 caracteres o menos")
                .required("Requerido"),
              email: Yup.string()
                .email("Correo inválido")
                .required("Requerido"),
              password: Yup.string()
              .min(8, "Debe tener al menos 8 caracteres")
              .required("Requerido")
            })}
            onSubmit={async (values, { setSubmitting }) => {
              await new Promise(r => setTimeout(r, 500));
              setSubmitting(false);
            }}
          >
            <Form className="flex flex-col w-full gap-5 justify-center items-center">
              <MyTextInput
                label="Nombre"
                name="firstName"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Apellido"
                name="lastName"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Correo"
                name="email"
                type="email"
                placeholder=""
              />
              <MyTextInput
                label="Contraseña"
                name="password"
                type="password"
                placeholder=""
              />
              <MyButton
              type="submit"
              text="Crear"
              />
            </Form>
          </Formik>
        </div>
      );
   
}

export default SignUp;