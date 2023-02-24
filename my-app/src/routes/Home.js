import { useState } from "react";
import Books from "../component/Books";
import styles from "../Styles/books.module.css";
import bookData from "../data/bookData.json";
import { Link } from "react-router-dom";

function Home() {
  const bookList = bookData.bookList;
  const [search, setSearch] = useState([]);
  // const [allBooks, setAllBooks] = useState(true);
  // const [itemState, setItemState] = useState("");
  // useEffect

  const onClick = (event) => {
    event.preventDefault(); // 클릭된 엘리먼트가 li 태그인 경우에만 처리
    setSearch(
      bookList.filter((book) => book.genre.includes(event.target.textContent))
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setSearch(
      bookList.filter((book) => book.title.includes(event.target.text.value))
    );
  };
  const total = (event) => {
    event.preventDefault();
    setSearch(bookList.slice(0, 0));
  };

  return (
    <div className={styles.layout}>
      <div className={styles.gnb}>
        <span>DN 문고 </span>
        <select>
          <option value="통합검색">통합검색</option>
          <option value="국내도서">국내도서</option>
          <option value="외국도서">외국도서</option>
          <option value="eBook">eBook</option>
          <option value="웹소설/코믹">웹소설/코믹</option>
          <option value="리뷰">리뷰</option>
        </select>
        <form onSubmit={onSubmit}>
          <input type="search" name="text" required />
          <input type="submit" value="검색" />
        </form>
        <input type="button" value="마이페이지" />
        <Link to={`/logIn/`}>
          <h1>로그인</h1>
        </Link>
      </div>
      <div className={styles.main}>
        <div className={styles.lnb}>
          <ul>
            <h3>분야</h3>
            <li onClick={total}>종합</li>
            <li onClick={onClick}>소설/시</li>
            <li onClick={onClick}>에세이</li>
            <li onClick={onClick}>예술</li>
            <li onClick={onClick}>종교</li>
            <li onClick={onClick}>사회</li>
            <li onClick={onClick}>과학</li>
            <li onClick={onClick}>경제/경영</li>
            <li onClick={onClick}>만화</li>
            <li onClick={onClick}>잡지</li>
          </ul>
        </div>
        <div>
          <Books searchBook={search} />
        </div>
      </div>
    </div>
  );
}
export default Home;
