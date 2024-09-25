interface IBookStore {
  books: TBook[];
  noOfAvailable: number;
  noOfIssued: number;
  action: IBookAction;
}
interface IBookAction {
  addBook: (book: TBook) => void;
  issueBook: (id: number) => void;
  returnBook: (id: number) => void;
  reset: () => void;
}

type TBook = {
  id: number;
  status: string;
  title: string;
  description: string;
};

export { type IBookStore, type TBook };
