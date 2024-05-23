import * as yup from "yup";

const schema = yup.object().shape({
  id: yup.number().positive().integer().required(),
  title: yup.string().required().min(1, "Title cannot be empty"),
  author: yup.string().required().min(1, "Author cannot be empty"),
  description: yup.string().required().min(1, "Description cannot be empty"),
  cover: yup.string().required(),
  publicationDate: yup.string().required(),
  isUserAddedBook: yup.boolean(),
});

export default schema;
