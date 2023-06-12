import React from "react";
import { Link, Outlet} from "react-router-dom";



const SongList = ({ songs }) => {

  //홈으로 강제이동 navigate
  // const navigate = useNavigate();

  // const goHome = () => {
  //   // navigate 를 이용해서 정보를 전달하고 싶다.
  //   // state 옵션에 객체를 정의해서 전달해 준다.
  //   navigate("/", { state: { from: "/SongList", age: 666 } });
  // };

  const list = songs.map((item) => {
    //return ()는 JSX로 html 만들려고 한다.
    return (
      <li className="list-group-item" key={item.id}>
        <Link to={`/songs/${item.id}`} style ={{textDecoration:"none"}}>
          {item.title} {item.musician}

          {/* font-awsome */}
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });



  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
      {/* 중첨된 Route 표현 */}
      <Outlet context={{songs}}/>

      {/* <button className="btn btn-danger" onClick={goHome}>
        홈으로 강제이동 navigate
      </button> */}
    </div>
  );
};

export default SongList;
