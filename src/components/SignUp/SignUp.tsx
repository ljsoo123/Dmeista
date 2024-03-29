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
import axios from "axios";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nickname, setNickname] = useState<string>("");
  const [certification, setCertification] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [checkImg, setCheckImg] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [sameCheck, setSameCheck] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [auth, setAuth] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const signUpCheck: boolean = useSelector(
    (store: Store) => store.loginCheck.signUpCheck
  );
  const onXClick = () => {
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
    axios
      .post(`http://3.36.218.14:8080/users`, {
        email: email,
        password: password,
        nickname: nickname,
      })
      .then((res) => {
        {
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const onEmailClick = () => {
    axios
      .post("http://3.36.218.14:8080/users/email/verify/signup", {
        email: email,
      })
      .then((res) => {
        console.log(res);
        setCertification(true);
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setCertification(false);
          alert("이미 사용중인 이메일입니다.");
        }
      });
  };
  const onNicknameCheck = () => {
    axios
      .get(`http://3.36.218.14:8080/users/nickname?nickname=${nickname}`)
      .then(() => {
        setSameCheck(true);
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setSameCheck(true);
        }
      });
  };
  const onDoneClick = () => {
    axios
      .put("http://3.36.218.14:8080/users/email/verify", {
        email: email,
        auth_code: auth,
      })
      .then(() => {
        setCheck(true);
        //setConfirm(true);
      });
  };
  const onCertificationCheck = (e) => {
    if (e.key == "Enter") {
      document.getElementById("certification").click();
    }
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
                  <S.CheckNumDiv
                    placeholder="인증번호를 받을 이메일을 입력하세요"
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={onCertificationCheck}
                  />
                  <S.CheckNumBtn
                    onClick={onEmailClick}
                    certification={certification}
                    id="certification"
                  >
                    인증
                  </S.CheckNumBtn>
                </div>
                {certification && (
                  <div>
                    <S.CheckNumDiv
                      placeholder="인증번호를 입력하세요"
                      onChange={(e) => setAuth(e.target.value)}
                    />
                    <S.CheckNumBtn2 onClick={onDoneClick} check={check}>
                      확인
                    </S.CheckNumBtn2>
                  </div>
                )}
                <S.Input
                  placeholder="password를 입력하세요"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <S.CheckNumDiv
                    placeholder="Nickname을 입력하세요"
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <S.CheckNickNameBtn onClick={onNicknameCheck}>
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
