import React from "react";
import Header from "./components/Header/Header";
import * as S from "./styles";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <BrowserRouter>
        <Route exact path="/main" component={Main} />
      </BrowserRouter>
    </>
  );
};

export default App;
