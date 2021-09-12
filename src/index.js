import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// JS
import Book from "./Book";
import { books } from "./books";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
// export default index
