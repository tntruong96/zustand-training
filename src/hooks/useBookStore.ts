import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import bookStore from "../stores/bookStore";

const useBookStore = create(
  devtools(
    persist(bookStore, {
      name: "bookstore",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export const useBooks = () => useBookStore((state) => state.books);
export const useIssuedBooks = () => useBookStore((state) => state.noOfIssued);
export const useAvailableBooks = () =>
  useBookStore((state) => state.noOfAvailable);
export const useBookActions = () => useBookStore((state) => state.action);
export default useBookStore;
