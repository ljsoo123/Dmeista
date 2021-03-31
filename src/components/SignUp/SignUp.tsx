import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../modules/reducer";
import * as S from "../../styles/SignUpStyle";
import cancelLogin from "../../../image/cancelLogin.svg";
import signupLogo from "../../../image/loginLogo.svg";
import { signUpStateSaga } from "../../modules/action/loginCheck";
import correctCertification from "../../../image/correctCertification.svg";
import incorrectCertification from "../../../image/incorrectCertification.svg";
import sameNickName from "../../../image/sameNickName.svg";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [certification, setCertification] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [checkImg, setCheckImg] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [sameCheck, setSameCheck] = useState<boolean>(false);
  const signUpCheck = useSelector(
    (store: Store) => store.loginCheck.signUpCheck
  );
  const onXClick = () => {
    console.log("x");
    dispatch(signUpStateSaga());
    setCheck(false);
    setConfirm(false);
    setCertification(false);
    setCheckImg(false);
    setSameCheck(false);
  };
  const onSignUpEnd = () => {
    dispatch(signUpStateSaga());
    setCheck(false);
    setConfirm(false);
    setCertification(false);
    setCheckImg(false);
    setSameCheck(false);
  };
  return (
    <>
      {signUpCheck && (
        <S.Main>
          <S.CertificationImg certification={certification}>
            <img src={correctCertification} />
          </S.CertificationImg>
          <S.InCorrectCertification confirm={confirm}>
            <img src={incorrectCertification} />
          </S.InCorrectCertification>
          <S.SameNickName sameCheck={sameCheck}>
            <img src={sameNickName} />
          </S.SameNickName>
          <S.MainDiv>
            <S.Content>
              <div>
                <S.Image>
                  <img src={cancelLogin} onClick={onXClick} />
                </S.Image>
              </div>
              <S.LoginHeader>
                <div>Sign Up</div>
                <div>
                  <div>
                    <img src={signupLogo}></img>
                  </div>
                </div>
              </S.LoginHeader>
              <S.InputDiv>
                <div>
                  <S.CheckNumDiv placeholder="인증번호를 받을 이메일을 입력하세요" />
                  <S.CheckNumBtn
                    onClick={() => setCertification(!certification)}
                    certification={certification}
                  >
                    인증
                  </S.CheckNumBtn>
                </div>
                {certification && (
                  <div>
                    <S.CheckNumDiv placeholder="인증번호를 입력하세요" />
                    <S.CheckNumBtn2
                      onClick={() => {
                        setCheck(true);
                        setConfirm(true);
                      }}
                      check={check}
                    >
                      확인
                    </S.CheckNumBtn2>
                  </div>
                )}
                <S.Input placeholder="password를 입력하세요" type="password" />
                <div>
                  <S.CheckNumDiv placeholder="Nickname을 입력하세요" />
                  <S.CheckNickNameBtn
                    onClick={() => {
                      setSameCheck(true);
                    }}
                  >
                    중복확인
                  </S.CheckNickNameBtn>
                </div>
                <S.Button onClick={onSignUpEnd}>회원가입</S.Button>
              </S.InputDiv>
              <S.TextDiv>Dmeista</S.TextDiv>
            </S.Content>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default SignUp;
