import React, { useState } from "react";
import { FormProps, ShortenedClient } from "../../../interfaces";
import { ComponentsText, FormLabels } from "../../../constants/ComponentsData";
import { useForm } from "react-hook-form";
import { Client, Text } from "../../../interfaces";
import { UpdateClient } from "../../../helpers/requests";
import { useMutation } from "react-query";

const FormModal: React.FC<FormProps> = ({ client, refetch }) => {
  const { register, handleSubmit, errors } = useForm<Client>();
  const [updatedClient, setUpdatingClient] = useState<ShortenedClient>({
    id: client.id,
    firstName: client.firstName,
    lastName: client.lastName,
    phone: client.phone,
  });

  const { mutate, isSuccess, isLoading } = useMutation(UpdateClient, {
    onSuccess: () => refetch(),
  });

  const handleChange = (event: any) => {
    setUpdatingClient((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = handleSubmit(() => update());

  const update = async () => {
    try {
      await mutate(updatedClient);
    } catch (e) {}
  };
  if (isSuccess) {
    return <p>Successfully updated </p>;
  }
  if (isLoading) {
    return <p>Please, wait, loading </p>;
  }

  return (
    <div className="w-3/6 flex flex-col justify-center items-center h-full bg-green-400">
      <p className="text-center text-green-800 font-semibold text-lg mb-3">
        {ComponentsText.modal}
      </p>
      <form className="flex flex-col w-4/5 " onSubmit={onSubmit}>
        <label className="text-green-800 font-semibold">Id</label>
        {errors.id && <p>This field is required</p>}
        <input
          type="text"
          name="id"
          defaultValue={client.id}
          onChange={handleChange}
          ref={register({ required: true })}
        />
        <label className="text-green-800 font-semibold">Name</label>
        {errors.firstName && <p>This field is required</p>}
        <input
          type="text"
          name="firstName"
          defaultValue={client.firstName}
          onChange={handleChange}
          ref={register({ required: true })}
        />
        <label className="text-green-800 font-semibold">Last Name</label>
        {errors.lastName && <p>This field is required</p>}
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          defaultValue={client.lastName}
          ref={register({ required: true })}
        />
        <label className="text-green-800 font-semibold">Phone</label>
        {errors.phone && <p>This field is required</p>}
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          defaultValue={client.phone}
          ref={register({ required: true })}
        />
        <button
          className="w-full bg-green-600 mt-3 py-2 text-white font-semibold"
          type="submit"
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default FormModal;
