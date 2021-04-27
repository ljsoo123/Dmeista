import React from "react";
import Header from "./components/Header/Header";
import * as S from "./styles";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Mypage from "./components/Mypage/Mypage";
import Search from "./components/Main/Post/Search";

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/search" component={Search} />
      </BrowserRouter>
    </>
  );
};

export default App;
