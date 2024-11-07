import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// [Switch 대신 Routes 를 쓸 때의 변경사항]
// 1. Switch 의 네이밍이 Routes로 변경되었습니다 :)
// 2. exact 옵션 삭제
// 3. component 방식 변경 (component={COM} 및 render={() => <h1>Hello<h1/>} 삭제)
// 4. path 를 기존의 path="/Web/:id" 에서 path=":id" 로, 상대경로로 지정
// 5. 이 외에도, path="." / path=".." 등으로 상대경로를 표현한다
// 6. Router -> BrowserRouter로 변경되었습니다 :)

// react-router-dom 6 버전 이후 변경사항
// 6이하 버전에서는 "/" 경로에 대한 처리가 없었는데, 6 이상에서는 기본적으로 "/" 경로에 대한 처리가 있습니다.
// 그래서 "/"경로가 맨 밑으로 굳이 옮기지 않아도 exact 옵션 없이 자동으로 처리됩니다.
// exact가 사라졌습니다. 대신 알아서 최적의 경로를 react-router-dom에서 찾아줍니다.
/*
 ** 1. 라우트 설정
 ** 2. 라우트 컴포넌트 생성
 ** 3. Header 컴포넌트 생성
 */
