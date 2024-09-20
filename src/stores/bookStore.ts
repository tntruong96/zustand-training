import { StateCreator } from "zustand";
import { IBookStore, TBook } from "../types/book.types";

const bookStore: StateCreator<IBookStore, [], []> = (set, get) => ({
  books: [] as TBook[],
  noOfAvailable: 0,
  noOfIssued: 0,
  action: {
    addBook: (book: TBook) => {
      set((state: IBookStore) => ({
        books: [...state.books, { ...book, status: "available" }],
        noOfAvailable: state.noOfAvailable + 1,
      }));
    },
    issueBook: (id: number) => {
      const books = get().books;
      const updatedBooks = books?.map((book: TBook) => {
        if (book.id === id) {
          return {
            ...book,
            status: "issued",
          };
        } else {
          return book;
        }
      });
      set((state: IBookStore) => ({
        books: updatedBooks,
        noOfAvailable: state.noOfAvailable - 1,
        noOfIssued: state.noOfIssued + 1,
      }));
    },
    reset: () => {
      set({
        books: [],
        noOfAvailable: 0,
        noOfIssued: 0,
      });
    },
    returnBook: (id: number) => {
      const books = get().books;
      const updatedBooks = books?.map((book: TBook) => {
        if (book.id === id) {
          return {
            ...book,
            status: "available",
          };
        } else {
          return book;
        }
      });
      set((state: IBookStore) => ({
        books: updatedBooks,
        noOfAvailable: state.noOfAvailable + 1,
        noOfIssued: state.noOfIssued - 1,
      }));
    },
  },
});

export default bookStore;
