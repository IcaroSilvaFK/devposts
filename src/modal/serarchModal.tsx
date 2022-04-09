import { FC, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

import { useModa } from "../context/modalContext";

import { Container } from "./styles";

interface IFormProps {
  search: string;
}

export const SearchModal: FC = () => {
  const { modal, handleCloseModal } = useModa();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<IFormProps>();

  const submitHandler: SubmitHandler<IFormProps> = (data) => {
    router.push(`/search/${data.search}`);
    reset();
    handleCloseModal();
  };

  return modal ? (
    <Container onClick={handleCloseModal}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type='text'
          {...register("search")}
          placeholder='Pesquise aqui sua tecnologia favorita'
        />
        <button type='submit'>
          <BsSearch size={20} color='#718096' />
        </button>
      </form>
    </Container>
  ) : (
    <></>
  );
};
