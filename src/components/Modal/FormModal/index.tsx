import React, { useState } from "react";
import { FormProps, ShortenedClient } from "../../../interfaces";
import {
  ComponentsText,
  FormLabels,
  ModalProcessingText,
} from "../../../constants/ComponentsData";
import { useForm } from "react-hook-form";
import { Client } from "../../../interfaces";
import { UpdateClient } from "../../../helpers/requests";
import { useMutation } from "react-query";
import Input from "./Input";
import ProcessMessage from "../ProcessMessage";

const FormModal: React.FC<FormProps> = ({ client, refetch }) => {
  const { register, handleSubmit, errors } = useForm<Client>();
  const [updatedClient, setUpdatingClient] = useState<ShortenedClient>({
    id: client.id,
    firstName: client.firstName,
    lastName: client.lastName,
    phone: client.phone,
  });

  const { mutate, isSuccess, isLoading, isError } = useMutation(UpdateClient, {
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
    return <ProcessMessage message={ModalProcessingText.success} />;
  }
  if (isLoading) {
    return <ProcessMessage message={ModalProcessingText.loading} />;
  }
  if (isError) {
    return <ProcessMessage message={ModalProcessingText.error} />;
  }
  return (
    <div className="w-3/6 flex flex-col justify-center items-center h-full bg-green-500">
      <p className="text-center text-green-900 mb-5 px-2 font-bold text-2xl">
        {ComponentsText.modal}
      </p>
      <form className="flex flex-col w-4/5 text-center" onSubmit={onSubmit}>
        <Input
          register={register}
          defaultValue={client.firstName}
          error={errors.firstName}
          handleChange={handleChange}
          name="firstName"
          labelText={FormLabels.name}
        />

        <Input
          register={register}
          defaultValue={client.lastName}
          error={errors.lastName}
          handleChange={handleChange}
          name="lastName"
          labelText={FormLabels.lastName}
        />

        <Input
          register={register}
          defaultValue={client.phone}
          error={errors.phone}
          handleChange={handleChange}
          name="phone"
          labelText={FormLabels.phone}
        />

        <button
          className="w-full bg-green-700 mt-3 py-2 text-white font-semibold"
          type="submit"
        >
          {FormLabels.btn}
        </button>
      </form>
    </div>
  );
};

export default FormModal;
