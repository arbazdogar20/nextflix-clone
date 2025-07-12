// App.jsx
import React from "react";
import DynamicForm from "../components/DynamicForm";

const formConfig = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "age", label: "Age", type: "number" },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    required: true,
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
  {
    name: "bio",
    label: "Bio",
    type: "textarea",
    placeholder: "Tell us about yourself",
  },
];

const FormPage = () => {
  const handleSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return <DynamicForm config={formConfig} onSubmit={handleSubmit} />;
};

export default FormPage;
