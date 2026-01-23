import Book from "./Book";
import { books } from "../data/books";

export default function BooksGrid() {
  return (
    <section className=" pb-8 mx-auto">
      <div
        className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5
          grid
          gap-10 sm:gap-5
          justify-items-center
        "
      >
        {books.map(book => (
          <Book
            key={book.id}
            {...book}
          />
        ))}
      </div>
    </section>
  );
}
