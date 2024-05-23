import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createNewBook, deleteAddedBook, editAddedBook } from "src/lib/stores/books-store";
import useBookStore from "src/lib/stores/books-store/hook";
import { useAppDispatch } from "src/lib/stores/hooks";
import { Book } from "src/models/types";
import schema from "../models/types";
import { convertFileToBase64 } from "../utils";

export default function useBookForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Book>({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const { checkIsThisBookFromUser, getUserAddedBook } = useBookStore();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isEditState = !!id;

  useEffect(() => {
    if (id) {
      const data = getUserAddedBook(id);
      if (data) {
        reset(data);
      }
    }
  }, [getUserAddedBook, id, reset]);

  useEffect(() => {
    if (!id) {
      const generateId = (): number => {
        const mockid = Math.floor(Math.random() * 1000000);
        const isThisBookAvailable = checkIsThisBookFromUser(mockid);
        if (isThisBookAvailable) {
          return generateId();
        }
        return mockid;
      };
      setValue("id", generateId());
    }
  }, [setValue, id, checkIsThisBookFromUser]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      console.log({ base64 });
      setValue("cover", base64);
    }
  };

  const onSubmit = (data: Book) => {
    if (isEditState) {
      dispatch(editAddedBook(data));
      return navigate("/", { replace: true });
    }
    setValue("isUserAddedBook", true);
    dispatch(createNewBook(data));
    navigate("/", { replace: true });
  };

  const onFinish = handleSubmit(onSubmit);
  const onDeleteBook = () => {
    if (id) {
      dispatch(deleteAddedBook(Number(id)));
      navigate("/", { replace: true });
    }
  };

  return {
    onFinish,
    handleFileChange,
    register,
    errors,
    isEditState,
    onDeleteBook,
  };
}
