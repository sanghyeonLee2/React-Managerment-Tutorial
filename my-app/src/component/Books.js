import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/books.module.css";
import bookData from "../data/bookData.json";

function Books({ searchBook = [], itemState, allBooks }) {
  const bookList = bookData.bookList;
  const [cnt, setCnt] = useState(0);
  const cartOnClick = (event) => {
    event.preventDefault();
    setCnt(cnt + 1);
    console.log(event.target.parentElement.key);
  };
  return (
    <div className={styles.content}>
      {/* {useEffect(() => {
        bookList.map((book) => (
          <div key={book.id}>
            {console.log(book.genre)}
            <h2>
              <input type="checkbox" />
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </h2>
            <p>가격 : {book.price}</p>
            <p>출판사 : {book.publisher}</p>
            <p>작가 : {book.writer}</p>
            <p>평점 : {book.rate}</p>
            <button type="button" onClick={cartOnClick}>
              장바구니 담기
            </button>
          </div>
        ));
        return;
      })} */}

      {searchBook.length >= 1
        ? searchBook.map((book) => (
            <div key={book.id}>
              <h2>
                <input type="checkbox" />
                <Link to={`/book/${book.id}`}>{book.title}</Link>
              </h2>
              <p>가격 : {book.price}</p>
              <p>출판사 : {book.publisher}</p>
              <p>작가 : {book.writer}</p>
              <p>평점 : {book.rate}</p>
              <button type="button" onClick={cartOnClick}>
                장바구니 담기
              </button>
            </div>
          ))
        : bookList.map((book) => (
            <div key={book.id}>
              <h2>
                <input type="checkbox" />
                <Link to={`/book/${book.id}`}>{book.title}</Link>
              </h2>
              <p>가격 : {book.price}</p>
              <p>출판사 : {book.publisher}</p>
              <p>작가 : {book.writer}</p>
              <p>평점 : {book.rate}</p>
              <button type="button" onClick={cartOnClick}>
                장바구니 담기
              </button>
            </div>
          ))}
      <div>
        <Link to={`/cart`}>
          <h3>장바구니 {cnt}</h3>
        </Link>
      </div>
    </div>
  );
}

export default Books;
