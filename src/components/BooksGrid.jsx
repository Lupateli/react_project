import Book from "./Book";
import { books } from "../data/books";

export default function BooksGrid() {
  return (
    <section className="px-8 py-8">
      <div
        className="
          grid
          gap-4 sm:gap-7
          justify-items-center
          [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]
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
