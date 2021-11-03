import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("congrats you bought book");
  };
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click here to buy
      </button>
    </article>
  );
};

export default Book;
