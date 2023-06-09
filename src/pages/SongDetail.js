import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
    //페이지이동 Hook
    const navigate = useNavigate();
    
  const { id } = useParams();
  //id와 같은 1개의 객체를 songs 에서 추출해서
  //화면을 갱신합니다.
  //화면갱신을 위해서 state를 활용해야 합니다.
  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  //컴포넌트 마운트 되기전에 처리
  //데이터 로딩 및 처리
  useEffect(() => {
    //id를 이용해서 데이터에서 검색한 결과를 출력한다.
    //배열.find : 조건이 true 인 요소를 리턴한다.
    //배열.find : 여러개가 true 일때 처음 true 만 리턴한다.
    // URL Parameter 는 무조건 문자열입니다. 숫자로 변경함.
    const song = songs.find(
      (item) => item.id === parseInt(id)
    );
    //검색이 되지 않을 경우를 위한 처리
    if(song) {
        setTitle(song.title);
        setMusician(song.musician);
        setLink(`https://m.youtube.com/watch?v=${song.youtube_link}`);
    }else{
        alert("자료가 없습니다.");
        navigate("/songs");
    }
  
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musican : {musician}</p>
      <p>
        {/* 유튜브 보여주기 */}
        <a href={link} target="_blank">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
