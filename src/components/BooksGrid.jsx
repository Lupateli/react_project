import Book from "./Book";
import { books } from "../data/books";

export default function BooksGrid() {
  return (
    <section className="px- py-8 mx-auto">
      <div
        className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          grid
          gap-4 sm:gap-5
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
