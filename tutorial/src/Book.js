import React from "react";

const Book = ({ img, title, author }) => {
  // for events we need to add an attribute and eventHandler
  const clickHandler = (e) => {
    alert("Herro Carla");
    console.log(e);
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex
      </button>
    </article>
  );
};

export default Book;
