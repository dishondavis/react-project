import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// Setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81yXbSemHqL._AC_UL200_SR200,200_.jpg",
  author: "Crystal Radke",
  title: "My First Learn to Write Workbook",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91ttgU1OvWL._AC_UL200_SR200,200_.jpg",
  author: "Qian Julie Wang",
  title: "Beautiful Country: A Memoir",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
// export default index
