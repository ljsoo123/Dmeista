import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Store } from "../../modules/reducer";
import * as S from "./styles";
import {
  loginStateSaga,
  modalStateSaga,
  signUpStateSaga,
  newPostSaga,
  searchSaga,
} from "../../modules/action/loginCheck";
import * as T from "../../../types";

const Header = () => {
  const dispatch = useDispatch();
  const [tag, setTag] = useState<string>();
  var history = useHistory();
  var loginCheck: boolean = useSelector(
    (store: Store) => store.loginCheck.loginCheck
  );
  //const userInfo = useSelector((store: Store) => store.loginCheck.myInfo);
  const token = localStorage.getItem("token");
  const modalCheck: boolean = useSelector(
    (store: Store) => store.loginCheck.modalCheck
  );
  const [name, setName] = useState<any>("");

  const onMyPageClick = () => {
    history.push("/mypage");
    console.log(1);
  };
  const onLoginCheck = () => {
    dispatch(modalStateSaga());
    console.log(modalCheck);
    // dispatch(loginStateSaga());
  };
  const onGoHome = () => {
    history.push("/");
    setTag("");
  };
  const onSignUpClick = () => {
    dispatch(signUpStateSaga());
  };
  const onNewPostClick = () => {
    dispatch(newPostSaga());
  };
  const onLogOutClick = () => {
    dispatch(loginStateSaga());
    window.localStorage.clear();
  };
  const onSearch = (e) => {
    if (e.key == "Enter") {
      dispatch(searchSaga(tag));
      history.push("/search");
      console.log(tag);
    }
  };
  const onSearchChange = (e) => {
    setTag(e.target.value);
  };
  useEffect(() => {
    setName(localStorage.getItem("userName"));
    if (localStorage.getItem("token")) loginCheck = false;
  });
  return (
    <>
      <S.MainDiv>
        <S.Main>
          <S.MainLeft>
            <S.Title onClick={onGoHome}>Dmeista</S.Title>
            <S.Input>
              <input
                placeholder="태그로 검색하세요! ex) #대마고"
                onKeyPress={(e) => {
                  onSearch(e);
                }}
                onChange={onSearchChange}
              />
            </S.Input>
          </S.MainLeft>
          <S.MainRight>
            <S.TextDiv token={token}>
              {!token ? (
                <>
                  <div onClick={onLoginCheck}>로그인</div>
                  <div>&nbsp;|&nbsp;</div>
                  <div onClick={onSignUpClick}>회원가입</div>
                </>
              ) : (
                <>
                  <button onClick={onNewPostClick}>새 게시물 작성</button>
                  <div onClick={onMyPageClick}>마이페이지</div>
                  <div>
                    <div>{name}&nbsp;님 안녕하세요</div>
                    <div>&nbsp;|&nbsp;</div>
                    <div onClick={onLogOutClick}>로그아웃</div>
                  </div>
                </>
              )}
            </S.TextDiv>
          </S.MainRight>
        </S.Main>
      </S.MainDiv>
    </>
  );
};

export default withRouter(Header);
