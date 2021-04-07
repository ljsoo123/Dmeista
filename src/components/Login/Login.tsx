import React, { useState } from "react";
import * as S from "../../styles/LoginStyle";
import loginLogo from "../../../image/loginLogo.svg";
import cancelLogin from "../../../image/cancelLogin.svg";
import { Store } from "../../modules/reducer";
import { useSelector, useDispatch } from "react-redux";
import {
  modalStateSaga,
  loginStateSaga,
  signUpStateSaga,
  loginEndSaga,
} from "../../modules/action/loginCheck";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginCheck = useSelector((store: Store) => store.loginCheck.modalCheck);
  const signUpCheck = useSelector(
    (store: Store) => store.loginCheck.signUpCheck
  );
  const onXClick = () => {
    console.log("x");
    dispatch(modalStateSaga());
  };
  const onLogin = () => {
    dispatch(loginEndSaga(email, password));
    dispatch(loginStateSaga());
    dispatch(modalStateSaga());
  };
  const onSignUpClick = () => {
    //console.log("asasd");
    dispatch(signUpStateSaga());
    dispatch(modalStateSaga());
  };
  return (
    <>
      {loginCheck && (
        <>
          <S.Main>
            <S.MainDiv>
              <S.Content>
                <div>
                  <S.Image>
                    <img src={cancelLogin} onClick={onXClick} />
                  </S.Image>
                </div>
                <S.LoginHeader>
                  <div>Login</div>
                  <div>
                    <div>
                      <img src={loginLogo}></img>
                    </div>
                    <div>계속하려면 로그인하세요</div>
                  </div>
                </S.LoginHeader>
                <S.InputDiv>
                  <S.Input
                    placeholder="Email을 입력하세요"
                    onChange={(e) => setEmail(e.target.value)}
                  ></S.Input>
                  <S.Input
                    placeholder="Password를 입력하세요"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></S.Input>
                </S.InputDiv>
                <S.TextDiv>
                  <div>
                    <S.Circle />
                    <div>자동로그인</div>
                  </div>
                  <div>
                    <div>아직 계정이 없으신가요?&nbsp;</div>
                    <div onClick={onSignUpClick}>회원가입</div>
                  </div>
                </S.TextDiv>
                <S.LoginButton onClick={onLogin}>로그인</S.LoginButton>
                <S.BottomText>Dmeista</S.BottomText>
              </S.Content>
            </S.MainDiv>
          </S.Main>
        </>
      )}
    </>
  );
};

export default Login;
