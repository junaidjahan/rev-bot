import { useForm } from "react-hook-form";

function BaseTextField({ type, label, name, required }) {
  const { register } = useForm();
  return (
    <div className="block mx-1 my-1">
      <label className="text-white" for={name}>
        {label}
        {required}
      </label>
      <input
        {...register(label, { required })}
        type={type}
        name={name}
        className="w-full border-gray-300 rounded-full shadow-md "
      />
    </div>
  );
}

export default BaseTextField;
