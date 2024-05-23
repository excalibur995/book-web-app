import dayjs from "dayjs";
import Button from "src/presentation/ui/button";
import "./form.scss";
import useBookForm from "./usecases/useBookForm";

export default function BookForm() {
  const { onFinish, register, errors, onDeleteBook, handleFileChange, isEditState } = useBookForm();
  return (
    <div className="form-wrapper">
      <form onSubmit={onFinish}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" {...register("title")} placeholder="Book Title" />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input id="author" type="text" {...register("author")} placeholder="Author Name" />
          {errors.author && <p>{errors.author.message}</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" {...register("description")} placeholder="Book Description" />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="cover">Cover Image</label>
          <input id="cover" type="file" onChange={handleFileChange} />
          <input type="hidden" {...register("cover")} />
          {errors.cover && <p>{errors.cover.message}</p>}
        </div>

        <div>
          <label htmlFor="publicationDate">Publication Date</label>
          <input id="publicationDate" type="date" {...register("publicationDate")} max={dayjs().format("YYYY-MM-DD")} />
          {errors.publicationDate && <p>{errors.publicationDate.message}</p>}
        </div>

        <Button type="submit">{isEditState ? "Update" : "Submit"}</Button>
        {isEditState && (
          <Button type="button" onClick={onDeleteBook} variant="destructive">
            Delete Book
          </Button>
        )}
      </form>
    </div>
  );
}
