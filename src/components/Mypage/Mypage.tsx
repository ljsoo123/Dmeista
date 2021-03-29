import React from "react";
import * as S from "../../styles/MypageStyle";
import { Store } from "../../modules/reducer";
import { useSelector } from "react-redux";
import { $CombinedState } from "redux";
import loginCheckReducer from "../../modules/reducer/loginCheck";
import { User } from "../../../types";

const Mypage = () => {
  const user: User = useSelector((store: Store) => store.loginCheck.user[0]);
  const { email, nickname, createdAt } = user;
  console.log(user);
  return (
    <>
      <S.Main>
        <S.MainDiv>
          <S.TextDiv>
            <S.InnerDiv>
              <div>
                <S.TitleDiv>마이페이지</S.TitleDiv>
                <S.BorderDiv />
                <S.ContentDiv>
                  <div>
                    <div>username.</div>
                    <div>{nickname}</div>
                  </div>
                  <div>
                    <div>email.</div>
                    <div>{email}</div>
                  </div>
                  <div>
                    <div>createdAt.</div>
                    <div>{createdAt}</div>
                  </div>
                </S.ContentDiv>
              </div>
              <div>
                <S.FlexDiv>
                  <S.TitleDiv>최근 작성한 글</S.TitleDiv>
                  <S.ButtonDiv>정보 수정</S.ButtonDiv>
                </S.FlexDiv>
                <S.BorderDiv />
                <S.ContentDiv>최근에 작성한 글이 없습니다.</S.ContentDiv>
              </div>
              <div>
                <S.FlexDiv>
                  <S.TitleDiv>
                    친구&nbsp;<S.LightDiv>0</S.LightDiv>
                  </S.TitleDiv>
                  <S.FriendButtonDiv>친구요청확인</S.FriendButtonDiv>
                </S.FlexDiv>
                <S.BorderDiv />
                <S.ContentDiv>친구가 없습니다.</S.ContentDiv>
              </div>
            </S.InnerDiv>
          </S.TextDiv>
        </S.MainDiv>
      </S.Main>
    </>
  );
};

export default Mypage;
