import { useState } from "react";
import { useLocation } from "react-router-dom";
function Cart() {
  const location = useLocation();
  const [item, setItem] = useState([]);

  console.log(location.state[0].id);
  return (
    <div>
      <h1>장바구니</h1>
      <table border={1}>
        <caption>도서상품</caption>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
              전체선택
            </th>
            <th>상품명</th>
            <th>판매가</th>
            <th>수량</th>
            <th>소계금액</th>
            <th>주문/삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{location.state[0].title}</td>
            <td>{location.state[0].price}</td>
            <td>수량</td>
            <td>{location.state[0].price}</td>
            <td>주문/삭제</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
