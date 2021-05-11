import React, { useEffect, useState } from "react";
import * as S from "../../styles/MypageStyle";
import { Store } from "../../modules/reducer";
import { useSelector, useDispatch } from "react-redux";
import { $CombinedState } from "redux";
import loginCheckReducer from "../../modules/reducer/loginCheck";
import { User } from "../../../types";
import FriendRequest from "./FriendRequest/FriendRequest";
import {
  friendStateSaga,
  changeInfoSaga,
  friendRequestListSaga,
} from "../../modules/action/loginCheck";
import ChangeInfo from "./ChangeInfo/ChangeInfo";
import ChangePassWord from "./ChangeInfo/ChangePassWord";
import ChangeEmail from "./ChangeInfo/ChangeEmail";
import axios from "axios";
import NewPost from "../NewPost/NewPost";
import * as T from "../../../types";
import Friend from "./Friend/Friend";
import WriteList from "./WriteList/WriteList";

const Mypage = () => {
  const dispatch = useDispatch();
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [friend, setFriend] = useState<T.FriendType>({
    application_responses: [],
    total_items: 0,
  });
  const [postList, setPostList] = useState<any>([]);
  const token: string = localStorage.getItem("token");
  //const refresh_token: string = localStorage.getItem("refresh-token");

  const [userInfo, setUserInfo] = useState<T.UserInfo>({
    email: "",
    created_at: "",
    username: "",
  });
  const onFriendClick = () => {
    dispatch(friendStateSaga());
    dispatch(friendRequestListSaga());
  };
  const onChangeInfoClick = () => {
    dispatch(changeInfoSaga());
  };
  useEffect(() => {
    axios
      .get("http://3.36.218.14:8080/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserInfo({
          ...userInfo,
          email: res.data.email,
          created_at: res.data.created_at,
          username: res.data.username,
        });
        setPostList(res.data.post_list);
        axios
          .get("http://3.36.218.14:8080/users/friends", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setFriend({
              ...friend,
              application_responses: res.data.application_responses,
              total_items: res.data.total_items,
            });
          })
          .catch((err) => {});
      })
      .catch((err) => {
        if (err.response.status === 401) {
          axios
            .put("http://3.36.218.14:8080/auth", {})
            .then((res) => {
              localStorage.setItem("token", res.data.access_token);
              localStorage.setItem("refresh-token", res.data.refresh_token);
            })
            .catch((err) => {
              localStorage.clear();
            });
        }
      });
  }, []);
  return (
    <>
      <NewPost />
      <S.Main>
        <FriendRequest />
        <ChangeInfo passwordCheck={passwordCheck} />
        <ChangePassWord />
        <ChangeEmail />
        <S.MainDiv>
          <S.TextDiv>
            <S.InnerDiv>
              <div>
                <S.TitleDiv>마이페이지</S.TitleDiv>
                <S.BorderDiv />
                <S.MyInfo>
                  <div>
                    <div>username.</div>
                    <div>email.</div>
                    <div>createdAt.</div>
                  </div>
                  <div>
                    <div>{userInfo.username}</div>
                    <div>{userInfo.email}</div>
                    <div>{userInfo.created_at}</div>
                  </div>
                </S.MyInfo>
              </div>
              <div>
                <S.FlexDiv>
                  <S.TitleDiv>최근 작성한 글</S.TitleDiv>
                  <S.ButtonDiv onClick={onChangeInfoClick}>
                    정보 수정
                  </S.ButtonDiv>
                </S.FlexDiv>
                <S.BorderDiv />
                <S.WriteDiv>
                  {postList.length > 0 ? (
                    <WriteList postList={postList} />
                  ) : (
                    <>최근에 작성한 글이 없습니다.</>
                  )}
                </S.WriteDiv>
              </div>
              <div>
                <S.FlexDiv>
                  <S.TitleDiv>
                    친구&nbsp;<S.LightDiv>0</S.LightDiv>
                  </S.TitleDiv>
                  <S.FriendButtonDiv onClick={onFriendClick}>
                    친구요청확인
                  </S.FriendButtonDiv>
                </S.FlexDiv>
                <S.BorderDiv />
                <S.ContentDiv>
                  {friend.application_responses.length > 0 ? (
                    <Friend />
                  ) : (
                    <>친구가 없습니다.</>
                  )}
                </S.ContentDiv>
              </div>
            </S.InnerDiv>
          </S.TextDiv>
        </S.MainDiv>
      </S.Main>
    </>
  );
};

export default Mypage;
