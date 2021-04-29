import React from "react";
import * as S from "../../../styles/FriendStyle";

const Friend = () => {
  return (
    <S.Main>
      <S.Header>
        <S.Nickname>kangSinhee</S.Nickname>
        <S.Email>asassad</S.Email>
      </S.Header>
      <S.Footer>
        <S.CreatedAt>2020-05-23</S.CreatedAt>
        <S.PostNum>총 게시물 수 : 6</S.PostNum>
      </S.Footer>
    </S.Main>
  );
};

export default Friend;
