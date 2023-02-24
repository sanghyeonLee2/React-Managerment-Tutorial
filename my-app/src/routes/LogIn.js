import React from "react";
import { Link } from "react-router-dom";

function logIn(props) {
  const onSubmit = () => {};
  return (
    <div>
      <Link to={"/"}>
        <h3>홈</h3>
      </Link>
      <h3>회원</h3>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="아이디" />
        <br />
        <input type="password" placeholder="비밀번호" />
        <input type="submit" value="로그인" />
        <br />
        <label>
          <input type="checkbox" />
          <small>로그인 상태 유지</small>
        </label>
        <label>
          <input type="checkbox" />
          <small>아이디 저장</small>
        </label>
        <br />
        <small onClick>아이디찾기 </small>|<small onClick> 비밀번호찾기 </small>
        <Link to={"signUp/"}>
          |<small onClick> 회원가입</small>
        </Link>
      </form>
      <div>
        <h3>비회원</h3>
        <small>비회원으로 구매 시 입력하신 정보로 로그인해 주세요</small>
        <form>
          <input type="text" placeholder="주문자명" />
          <br />
          <input type="tel" placeholder="휴대폰번호" />
          <br />
          <input type="password" placeholder="주문비밀번호" />
          <input type="submit" value="로그인" />
          <br />
          <small onClick>주문비밀번호 찾기</small>|{" "}
          <small onClick> 회원가입 </small>
        </form>
      </div>
    </div>
  );
}

export default logIn;
