import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <div className="flex flex-col">          
          <label className="mb-2" htmlFor={props.id || props.name}>{label}</label>
          <input className="border border-gray-200 rounded-sm p-1" {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="error text-sm text-danger-500">{meta.error}</div>
          ) : null}
        </div>
      </>
    );
  };

  export default MyTextInput;