import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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
  <h1>
    My First Learn to Write Workbook: Practice for Kids with Pen Control, Line
    Tracing, Letters, and More! My First Learn to Write Workbook
  </h1>
);

const Author = () => <h4>Crystal Radke</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
// export default index
