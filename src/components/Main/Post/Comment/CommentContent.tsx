import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentType } from "../../../../../types";
import * as S from "../../../../styles/CommentStyle";
import SubComment from "./SubComment";

const CommentContent = (props: { data: CommentType }) => {
  const { data } = props;
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  const [check, setCheck] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);
  const [reComment, setReComment] = useState<string>("");
  const [changeComment, setChangeComment] = useState<string>("");
  const onReCommentCheck = () => {
    setCheck((prev) => !prev);
  };
  const onInputChange = (e) => {
    setReComment(e.target.value);
  };
  const onChangeClick = () => {
    setChange((prev) => !prev);
  };
  const onChangeInputChange = (e) => {
    setChangeComment(e.target.value);
  };
  const onDeleteClick = () => {
    axios
      .delete(`http://3.36.218.14:8080/comments/${data.comment_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 401) {
          axios
            .put(
              "http://3.36.218.14:8080/auth",
              {},
              {
                headers: {
                  "X-Refresh-Token": refresh_token,
                },
              }
            )
            .then((res) => {
              localStorage.setItem("token", res.data.access_token);
              localStorage.setItem("refresh-token", res.data.refresh_token);
            })
            .catch((err) => {
              localStorage.clear();
            });
        }
      });
  };
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      axios
        .post(
          `http://3.36.218.14:8080/comments/sub/${data.comment_id}`,
          { content: reComment },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {})
        .catch((err) => {
          if (err.response.status === 401) {
            axios
              .put(
                "http://3.36.218.14:8080/auth",
                {},
                {
                  headers: {
                    "X-Refresh-Token": refresh_token,
                  },
                }
              )
              .then((res) => {
                localStorage.setItem("token", res.data.access_token);
                localStorage.setItem("refresh-token", res.data.refresh_token);
              })
              .catch((err) => {
                localStorage.clear();
              });
          }
        });
    }
  };
  const onChangeKeyPress = (e) => {
    if (e.key == "Enter") {
      axios
        .patch(
          `http://3.36.218.14:8080/comments/${data.comment_id}`,
          { content: changeComment },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {})
        .catch((err) => {
          if (err.response.status === 401) {
            axios
              .put(
                "http://3.36.218.14:8080/auth",
                {},
                {
                  headers: {
                    "X-Refresh-Token": refresh_token,
                  },
                }
              )
              .then((res) => {
                localStorage.setItem("token", res.data.access_token);
                localStorage.setItem("refresh-token", res.data.refresh_token);
              })
              .catch((err) => {
                localStorage.clear();
              });
          }
        });
    }
  };

  return (
    <>
      <S.Comment>
        <S.Header>
          <div>
            <S.Nickname>{data.author}</S.Nickname>
            {data.is_mine && (
              <S.Change>
                <div onClick={onChangeClick}>수정&nbsp;</div>
                <div>|</div>
                <div onClick={onDeleteClick}>&nbsp;삭제</div>
              </S.Change>
            )}
          </div>
          <div>{data.created_at}</div>
        </S.Header>
        <S.Content>{data.content}</S.Content>
        <div onClick={onReCommentCheck}>답글달기</div>
        {check && (
          <S.Input
            onChange={onInputChange}
            onKeyPress={onKeyPress}
            placeholder="답글을 입력하세요"
          />
        )}
        {change && (
          <S.Input
            onChange={onChangeInputChange}
            onKeyPress={onChangeKeyPress}
            placeholder="수정할 댓글을 입력하세요"
          ></S.Input>
        )}
      </S.Comment>
      {data.sub_comments.length > 0 && (
        <S.SubCommentStyle>
          <SubComment data={data.sub_comments} />
        </S.SubCommentStyle>
      )}
    </>
  );
};

export default CommentContent;
