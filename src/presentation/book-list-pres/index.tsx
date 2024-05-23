import PaginatedList from "src/components/paginated-list";
import "./book-list-pres.scss";
import { BookListPresentationProps } from "./models/types";

export default function BooklistPresentation(props: BookListPresentationProps) {
  const { title = "Special for You", ...rest } = props;
  return (
    <>
      <h2>{title}</h2>
      <PaginatedList {...rest} />
    </>
  );
}
