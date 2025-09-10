import React from "react";
import Book from "./Book";

export default function BooksLine() {
  return (
    <>
        <div className="flex flex-wrap gap-4 justify-center">
            <Book />
            <Book />
            <Book />
            <Book />
        </div>
    </>
  );
}
