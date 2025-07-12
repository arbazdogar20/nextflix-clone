// DynamicForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

const DynamicForm = ({ config, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {config.map((field) => (
        <div key={field.name} style={{ marginBottom: "1rem" }}>
          <label>{field.label}</label>
          <br />
          {field.type === "select" ? (
            <select {...register(field.name, { required: field.required })}>
              <option value="">Select {field.label}</option>
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              {...register(field.name, { required: field.required })}
              placeholder={field.placeholder}
            />
          ) : (
            <input
              type={field.type}
              {...register(field.name, { required: field.required })}
              placeholder={field.placeholder}
            />
          )}
          {errors[field.name] && (
            <p style={{ color: "red" }}>{field.label} is required</p>
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
