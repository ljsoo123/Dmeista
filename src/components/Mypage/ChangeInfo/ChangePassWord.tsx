import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../modules/reducer";
import * as S from "../../../styles/ChangePasswordStyle";
import x from "../../../../image/cancelLogin.svg";
import { changePasswordSaga } from "../../../modules/action/loginCheck";
import { useDispatch } from "react-redux";

const ChangePassWord = () => {
  const dispatch = useDispatch();
  const changePassword = useSelector(
    (store: Store) => store.loginCheck.changePassword
  );
  const onXClick = () => {
    dispatch(changePasswordSaga());
  };
  const [check, setCheck] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  return (
    <>
      {changePassword && (
        <S.Main>
          <S.MainDiv>
            <S.Content>
              <div>
                <S.Image>
                  <img src={x} onClick={onXClick} />
                </S.Image>
              </div>
              <S.Header>회원 정보 수정</S.Header>
              <S.BorderDiv />
              <S.TextDiv>
                패스워드 변경
                <div>인증 후 패스워드를 재설정 합니다.</div>
              </S.TextDiv>
              <S.InputDiv>
                <S.InputWithBtn placeholder="인증번호를 받을 이메일을 입력하세요" />
                <S.Button onClick={() => setCheck(!check)} check={check}>
                  인증
                </S.Button>
              </S.InputDiv>
              {check && (
                <S.InputDiv2>
                  <S.InputWithBtn placeholder="인증번호를 입력하세요" />
                  <S.Button2 onClick={() => setDone(!done)} done={done}>
                    확인
                  </S.Button2>
                </S.InputDiv2>
              )}
              <S.Input placeholder="새 password를 입력하세요" />
              <S.DoneBtn>패스워드 변경</S.DoneBtn>
            </S.Content>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default ChangePassWord;
