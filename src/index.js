import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81yXbSemHqL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => (
  <h1>My First Learn to Write Workbook: Practice for Kids with Pen Control</h1>
);

const Author = () => <h4>Crystal Radke</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
// export default index
