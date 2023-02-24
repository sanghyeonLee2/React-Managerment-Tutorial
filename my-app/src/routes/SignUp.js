import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //useNavigate는 URL주소를 변경할 때 사용하는 Hook
import axios from "axios";

function SignUp(props) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post("http://localhost:4000/users", {
        username: name,
        id: id,
        password: pw,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        navigate("/");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  const onSignUpSubmit = (e) => {
    e.preventDefault();
    setName(
      e.currentTarget.querySelector("#name").querySelector("input").value
    );
    setId(e.currentTarget.querySelector("#id").querySelector("input").value);
    setPw(e.currentTarget.querySelector("#pw").querySelector("input").value);
    register();
  };

  return (
    <div>
      <div>
        <Link to={"/"}>
          <h3>홈</h3>
        </Link>
      </div>
      <div>
        <Link to={"/logIn/"}>
          <h3>로그인</h3>
        </Link>
      </div>

      <div>
        <h3>회원가입</h3>
        <form onSubmit={onSignUpSubmit}>
          <ul>
            <li id="name">
              이름
              <input type="text" />
            </li>
            <li id="id">
              아이디
              <input type="text" />
            </li>
            <li id="pw">
              비밀번호
              <input type="password" />
            </li>
            <li>
              <input type="submit" value="가입완료" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
