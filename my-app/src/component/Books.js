import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/books.module.css";
import bookData from "../data/bookData.json";
import { useNavigate } from "react-router-dom";

function Books({ searchBook = [] }) {
  const navigate = useNavigate();
  const bookList = bookData.bookList;
  const [cnt, setCnt] = useState(0);
  const [cart, setCart] = useState([]);

  const cartOnClick = (book) => {
    cart.push(book);
    setCart(cart);
    setCnt(cnt + 1);
  };
  return (
    <div className={styles.content}>
      {searchBook.length !== 0
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
              <button type="button" onClick={() => cartOnClick(book)}>
                장바구니 담기
              </button>
            </div>
          ))}
      <div>
        {console.log(cart)}
        <h3
          onClick={() => {
            navigate(`/book/cart/`, { state: cart });
          }}
        >
          장바구니 {cnt}
        </h3>
      </div>
    </div>
  );
}

export default Books;
