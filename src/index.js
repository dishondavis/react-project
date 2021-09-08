import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// Setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81yXbSemHqL._AC_UL200_SR200,200_.jpg",
    author: "Crystal Radke",
    title: "My First Learn to Write Workbook",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91ttgU1OvWL._AC_UL200_SR200,200_.jpg",
    author: "Qian Julie Wang",
    title: "Beautiful Country: A Memoir",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/712%2BTA7g%2BYS._AC_UL200_SR200,200_.jpg",
    author: "Verity",
    title: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
// export default index
