import React, { useState } from "react";
import * as S from "../../../styles/ChangeInfoStyle";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../../modules/reducer";
import {
  changeInfoSaga,
  changePasswordSaga,
  changeEmailSaga,
} from "../../../modules/action/loginCheck";
import cancelLogin from "../../../../image/cancelLogin.svg";

const ChangeInfo = (props: { passwordCheck: boolean }) => {
  const { passwordCheck } = props;
  const dispatch = useDispatch();
  const changeInfo: boolean = useSelector(
    (store: Store) => store.loginCheck.changeInfo
  );
  const onXClick = () => {
    dispatch(changeInfoSaga());
  };
  const onPasswordClick = () => {
    dispatch(changeInfoSaga());
    dispatch(changePasswordSaga());
  };
  const onEmailClick = () => {
    dispatch(changeInfoSaga());
    dispatch(changeEmailSaga());
  };
  return (
    <>
      {changeInfo && (
        <S.Main>
          <S.MainDiv>
            <S.Content>
              <div>
                <S.Image>
                  <img src={cancelLogin} onClick={onXClick}></img>
                </S.Image>
              </div>
              <S.Header>회원 정보 수정</S.Header>
              <S.BorderDiv />
              <S.ChangeButton onClick={onPasswordClick}>
                <div>패스워드 변경</div>
                <div>인증 후 패스워드를 재설정 합니다.</div>
              </S.ChangeButton>
            </S.Content>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default ChangeInfo;
