import axios from "axios";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../../modules/reducer/index";
import * as S from "../../../../styles/CommentStyle";
import { CommentType, PostContent } from "../../../../../types";
import CommentContent from "./CommentContent";

interface Comment {
  comments: CommentType[];
}

const Comment = (props: { data: PostContent }) => {
  const ref = useRef();
  const { data } = props;
  //const data = useSelector((store: Store) => store.loginCheck.postContent);
  const id: number = useSelector((store: Store) => store.loginCheck.id);
  const token: string = localStorage.getItem("token");
  //const refresh_token = localStorage.getItem("refresh-token");
  const [nowComment, setNowComment] = useState<string>();
  const [Comment, setComment] = useState<PostContent>();
  const [ReCommentCheck, setReCommentCheck] = useState<boolean[]>();

  const [ReComment, setReComment] = useState<string>("");

  useEffect(() => {
    setComment(data);
  }, [data]);
  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNowComment(e.target.value);
  };
  const onReCommentClick = () => {};
  const onReCommentChange = (e) => {
    setReCommentCheck((prev) =>
      prev.map((now, i) => (i === e.target.key ? !now : now))
    );
  };
  const onReCommentInput = (e) => {
    if (e.key == "Enter") {
      axios.post(`http://3.36.218.14:8080/comments/sub/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  };
  const onCommentInput = (e) => {
    if (e.key == "Enter") {
      axios
        .post(
          `http://3.36.218.14:8080/comments/${id}`,
          {
            content: nowComment,
          },
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
    }
  };
  useMemo(() => {
    //data.comments.map(() => setReCommentCheck((prev) => [...prev, false]));
  }, [data]);
  const render = useMemo(() => {
    return data.comments.map((now: CommentType, i) => {
      return <CommentContent data={now} />;
    });
  }, [data]);
  const render1 = useMemo(() => {
    return data.comments.map((now: any, i) => {
      return (
        <S.Comment>
          <S.Header>
            <S.Nickname>{now.author}</S.Nickname>
            <div>{now.created_at}</div>
          </S.Header>
          <div>{now.content}</div>
          <div onClick={onReCommentClick} ref={ref} key={i}>
            답글달기
          </div>
          {true && (
            <S.Input
              key={i}
              onChange={onReCommentChange}
              onKeyPress={onReCommentInput}
            />
          )}
        </S.Comment>
      );
    });
  }, [data]);
  return (
    <S.Main>
      <S.Input
        placeholder="댓글을 입력하세요"
        onChange={onCommentChange}
        onKeyPress={onCommentInput}
      ></S.Input>

      {render}
    </S.Main>
  );
};

export default Comment;
