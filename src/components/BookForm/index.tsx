import { Controller, useForm } from "react-hook-form";
import { useBookActions } from "../../hooks/useBookStore";
import { TBook } from "../../types/book.types";
import "./index.css";

type TDefaultValue = TBook;

const defaultValues: TDefaultValue = {
  id: 0,
  description: "",
  title: "",
  status: "",
};

const BookForm = () => {
  const { addBook } = useBookActions();

  const { handleSubmit, control, reset } = useForm({ defaultValues });
  const submitForm = (formValue: TDefaultValue) => {
    addBook({
      ...formValue,
      status: "available",
      id: Math.round(Math.random() * 1000),
    });
    reset();
  };
  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit(submitForm)}>
        <h2>Add Book</h2>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <div className="form-input">
              <label>Title:</label>
              <input {...field} />
            </div>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <div className="form-input">
              <label>Description:</label>
              <input {...field} />
            </div>
          )}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
