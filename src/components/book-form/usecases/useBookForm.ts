import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createNewBook, deleteAddedBook, editAddedBook } from "src/lib/stores/books-store";
import { useAppDispatch, useAppSelector } from "src/lib/stores/hooks";
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
  const userBook = useAppSelector((state) => state.userBook);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isEditState = !!id;

  useEffect(() => {
    if (id) {
      const data = userBook.find((book) => Number(id) === book.id);
      if (data) {
        reset(data);
      }
    }
  }, [id, reset, userBook]);

  useEffect(() => {
    if (!id) {
      const generateId = (): number => {
        const mockid = Math.floor(Math.random() * 1000000);
        if (userBook.find(({ id }) => id === mockid)) {
          return generateId();
        }
        return mockid;
      };
      setValue("id", generateId());
    }
  }, [userBook, setValue, id]);

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
