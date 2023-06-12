import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

const About = ({ title }) => {
  // 웹브라우저의 라우터를 강제로 변경하려면 useNavigate() 를 활용
  const navigate = useNavigate();

  // useSearchParams : ?a=1&b=2 쿼리문자열 활용하기
  // useLocation : ?a=1&b=2#gogo 쿼리문자열 활용하기
  const location = useLocation();
  // console.log("주소창 객체", location.state);
  // console.log("주소창 객체", location.pathname);
  // console.log("주소창 객체", location.search);
  // console.log("주소창 객체", location.hash);

  // useLocation()  === window.location 객체와 같다.
  // useSearchParams() 를 이용한 수월하게 변수를 추출할 수 있다.
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("total"));
  // 현재 페이지
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 문자열을 숫자로 바꾸어줌.
    const strPage = parseInt(searchParams.get("page"));
    // console.log(typeof strPage);
    // console.log(strPage);
    // NaN !== NaN
    // isNaN(값)  :  NaN 인지 아닌지 검사
    // isNaN(값) 의 결과가 true 라며 값이 숫자 아니에요.
    // isNaN(값) 의 결과가 false 라며 값이 숫자
    setPage(!isNaN(strPage) ? strPage : 1);
  }, [searchParams]);

  const goPrev = () => {
    if (page > 0) {
      // 웹브라우저의 쿼리 스트링을 변경해 보자.
      // http://localhost:3000/about?page=1&total=5
      navigate(window.location.pathname + `?page=${page - 1}&total=5`);
    }
  };
  const goNext = () => {
    navigate(window.location.pathname + `?page=${page + 1}&total=5`);
  };
  // const goNaver = () => {
  //   // 윈도우 강제로 이동하기
  //   // window.location = "http://www.naver.com";
  //   window.open("http://www.naver.com");
  //   // 아래처럼 전달하면 path 와 함께 붙는다.
  //   // navigate("http://www.naver.com");
  // };

  // const goHome = () => {
  //   // navigate 를 이용해서 정보를 전달하고 싶다.
  //   // state 옵션에 객체를 정의해서 전달해 준다.
  //   navigate("/", { state: { from: "/About", age: 888 } });
  // };

  return (
    <div className="card card-body">
      <h2>About {title} </h2>
      <div>
        <div className="m-2"> 현재 페이지 : {page} </div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          Next
        </button>
        {/* <button className="btn btn-danger" onClick={goNaver}>
          네이버
        </button>
        <button className="btn btn-danger" onClick={goHome}>
          홈
        </button> */}
      </div>
    </div>
  );
};

export default About;