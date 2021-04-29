import React from "react";
import * as S from "../../../styles/WriteListStyle";
import { MyPost } from "../../../../types";

const WriteList = (props: { postList: MyPost[] }) => {
  const { postList } = props;
  return (
    <>
      {postList.map((now) => {
        return (
          <>
            <S.Write>
              <S.Title>{now.title}</S.Title>
              <S.Date>{now.created_at}</S.Date>
            </S.Write>
          </>
        );
      })}
    </>
  );
};

export default WriteList;
