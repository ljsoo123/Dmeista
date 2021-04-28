import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../modules/reducer/index";
import * as S from "../../../styles/CommentStyle";

const Comment = () => {
  const data = useSelector((store: Store) => store.loginCheck.postContent);
  const id = useSelector((store: Store) => store.loginCheck.id);
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  const [comment, setComment] = useState<string>();
  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const onCommentInput = (e) => {
    if (e.key == "Enter") {
      axios
        .post(
          `http://3.36.218.14:8080/comments/${id}`,
          {
            content: comment,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err.response));
    }
  };
  return (
    <S.Main>
      <S.Input
        placeholder="댓글을 입력하세요"
        onChange={onCommentChange}
        onKeyPress={onCommentInput}
      ></S.Input>
    </S.Main>
  );
};

export default Comment;
