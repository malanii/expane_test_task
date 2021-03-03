import React from "react";
import { InputProps } from "../../../interfaces";
import { FormLabels } from "../../../constants/ComponentsData";

export const Input: React.FC<InputProps> = ({
  handleChange,
  register,
  name,
  labelText,
  defaultValue,
  error,
}) => {
  return (
    <>
      <label className="text-green-900 font-semibold">{labelText}</label>
      {error && (
        <p className="text-red-700 font-semibold text-sm">
          {FormLabels.errorMessage}
        </p>
      )}
      <input
        className="my-1 text-center"
        type="text"
        name={name}
        defaultValue={defaultValue}
        onChange={handleChange}
        ref={register({ required: true })}
      />
    </>
  );
};

export default Input;
