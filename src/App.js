import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
import Header from "./components/Header";
import SongDetail from "./pages/SongDetail";
import { useState } from "react";

function App() {
  // 화면의 내용을 리랜더링 하는 변수 : state
  // state 변수 만드는 방법
  // const [변수명, set변수명] = useState(변수초기값)
  //
  // 멤버 정보
  const [members] = useState([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
  ]);
  const [songs] = useState([
    { id: 1, title: "Fallin' for you", musician: "Colbie callet", youtube_link: "PABUl_EX_hw" },
    { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04" },
    { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
    { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
    { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
    { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
    { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
    { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" },
  ]);
  return (
    <>
    {/* Header 컴포넌트는 항상 출력됨 */}
    <Header/>
    <div className="container mt-4">
  <Routes>
    {/* {<Route path = "개발자가 설정한 URI(주소)를 작성"/>} */}
    {/* {<Route path="/"/> */}
    {/* {<Route element = {보여줄 컴포넌트 엘리먼트}"/>} */}
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    {/* <Route path="" element={<컴포넌트 속성명="값"/>} */}
    <Route path="/about" element={<About title="인디벤드"/>}/>

    <Route path="/members" element={<Members members={members}/>}/>
    <Route path="/songs" element={<SongList songs={songs}/>}/>
    {/* 웹브라우저 주소 : /songs/1 URL Parameter 리턴 { id: 1 } */}
    <Route path="/songs/:id" element={<SongDetail songs={songs}/>}/>
  </Routes>
    </div>
    </>
    );
}

export default App;
