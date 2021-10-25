import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/41FYr12RflL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Seven Husbands of Evelyn Hugo: A Novel",
    author: "Taylor Jenkins Reid ",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/61Me3ePpM9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K Rowling",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41720Sh-chL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/41Jqju0LI5L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Spanish Love Deception",
    author: "Elena Arams",
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/51E+TsPtBJS._SX258_BO1,204,203,200_.jpg",
    title: "Time for School, Little Blue Truck",
    author: "Alice Schertle",
  },
  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/51jYWibWkNL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Picture of Dorian Gray",
    author: "Oscar wilde",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
