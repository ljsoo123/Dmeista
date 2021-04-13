import React, { useEffect } from "react";
import * as S from "../../../styles/FriendRequest";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../modules/reducer";
import cancelLogin from "../../../../image/cancelLogin.svg";
import { friendStateSaga } from "../../../modules/action/loginCheck";
import RequestList from "./RequestList/RequestList";
import axios from "axios";
import { friendRequestListSaga } from "../../../modules/action/loginCheck";

const FriendRequest = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const friendCheck = useSelector(
    (store: Store) => store.loginCheck.friendCheck
  );
  const onXClick = () => {
    dispatch(friendStateSaga());
  };
  return (
    <>
      {friendCheck && (
        <S.Main>
          <S.MainDiv>
            <S.Content>
              <div>
                <S.Image>
                  <img src={cancelLogin} onClick={onXClick} />
                </S.Image>
              </div>
              <S.LoginHeader>
                <div>친구 요청 확인</div>
              </S.LoginHeader>
              <S.BorderDiv />
              <RequestList />
            </S.Content>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default FriendRequest;
