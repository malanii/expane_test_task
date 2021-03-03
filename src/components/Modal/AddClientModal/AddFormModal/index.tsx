import React, { useState } from "react";
import {
  ComponentsText,
  FormLabels,
  ModalProcessingText,
} from "../../../../constants/ComponentsData";
import { useForm } from "react-hook-form";
import { Client } from "../../../../interfaces";
import { AddClient } from "../../../../helpers/requests";
import { useMutation } from "react-query";
import Input from "../../Input";
import ProcessMessage from "../../ProcessMessage";

const AddFormModal: React.FC<any> = ({refetch}) => {
  const { register, handleSubmit, errors } = useForm<Client>();
  const [addedClient, setAddingClient] = useState<Client>({
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    avatarUrl: "",
  });

  const { mutate, isSuccess, isLoading, isError } = useMutation(AddClient, {
    onSuccess: () => refetch(),
  });

  const handleChange = (event: any) => {
    setAddingClient((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = handleSubmit(() => update());

  const update = async () => {
    try {
      await mutate(addedClient);
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
      <p className="text-center text-green-900 mb-2 px-1 font-bold text-xl">
        {ComponentsText.addModal}
      </p>
      <form className="flex flex-col w-4/5 text-center" onSubmit={onSubmit}>
        <Input
          register={register}
          defaultValue={addedClient.firstName}
          error={errors.firstName}
          handleChange={handleChange}
          name="firstName"
          labelText={FormLabels.name}
        />

        <Input
          register={register}
          defaultValue={addedClient.lastName}
          error={errors.lastName}
          handleChange={handleChange}
          name="lastName"
          labelText={FormLabels.lastName}
        />

        <Input
          register={register}
          defaultValue={addedClient.phone}
          error={errors.phone}
          handleChange={handleChange}
          name="phone"
          labelText={FormLabels.phone}
        />
        <Input
          register={register}
          defaultValue={addedClient.avatarUrl}
          error={errors.avatarUrl}
          handleChange={handleChange}
          name="avatarUrl"
          labelText={FormLabels.avatarUrl}
        />

        <button
          className="w-full bg-green-700 mt-3 py-2 text-white font-semibold"
          type="submit"
        >
          {FormLabels.btnAdd}
        </button>
      </form>
    </div>
  );
};

export default AddFormModal;
