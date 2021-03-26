import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Store } from "../../modules/reducer";
import * as S from "./styles";
import { loginStateSaga } from "../../modules/action/loginCheck";

const Header = () => {
  const dispatch = useDispatch();
  var history = useHistory();
  const loginCheck: boolean = useSelector(
    (store: Store) => store.loginCheck.loginCheck
  );

  const [name, setName] = useState<string>("이지수");
  const onMyPageClick = () => {
    history.push("/mypage");
    console.log(1);
  };
  return (
    <>
      <S.MainDiv>
        <S.Main>
          <S.MainLeft>
            <S.Title>Dmeista</S.Title>
            <S.Input>
              <input placeholder="태그로 검색하세요! ex) #대마고" />
            </S.Input>
          </S.MainLeft>
          <S.MainRight>
            <S.TextDiv loginCheck={loginCheck}>
              {!loginCheck ? (
                <>
                  <div onClick={() => dispatch(loginStateSaga())}>로그인</div>
                  <div>&nbsp;|&nbsp;</div>
                  <div>회원가입</div>
                </>
              ) : (
                <>
                  <button>새 게시물 작성</button>
                  <div onClick={() => history.push("mypage")}>마이페이지</div>
                  <div>
                    <div>{name}&nbsp;님 안녕하세요</div>
                    <div>&nbsp;|&nbsp;</div>
                    <div onClick={() => dispatch(loginStateSaga())}>
                      로그아웃
                    </div>
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
