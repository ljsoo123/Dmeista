import React, { useRef, useState, MutableRefObject, useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "../../../styles/postStyles";
import * as Type from "../../../../types";
import { Store } from "../../../modules/reducer";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Post = (props: {
  postTitle: Type.titleType;
  postNickName: Type.nicknameType;
  hashTag: Type.hashTagType;
  time: Type.timeType;
  write: Type.writeType;
  views: Type.viewsType;
  like: Type.likeType;
  onClick: (id: number) => void;
  id: number;
  emoji: string;
}) => {
  const {
    postTitle,
    postNickName,
    hashTag,
    time,
    write,
    views,
    like,
    id,
    onClick,
  } = props;
  const token = localStorage.getItem("token");
  const loginCheck: boolean = useSelector(
    (store: Store) => store.loginCheck.loginCheck
  );
  const [hover, setHover] = useState<boolean>(false);
  const onEmojiClick = (e) => {
    console.log(e.target.id);
    axios
      .post(
        `http://3.36.218.14:8080/posts/${id}/emoji?status=${e.target.id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };
  return (
    <S.Main>
      <S.PostDiv>
        <S.TopDiv>
          <div>
            <div>
              <S.TitleDiv>{postTitle}</S.TitleDiv>
              <S.NickNameDiv>{postNickName}</S.NickNameDiv>
            </div>
            <div>
              <S.HashTagDiv>
                {hashTag.map((now, i: number) => {
                  if (i !== hashTag.length - 1) {
                    if (now[0] == "#") return `${now}, `;
                    else return `#${now}, `;
                  } else {
                    if (now[0] == "#") return `${now}`;
                    else return `#${now}`;
                  }
                })}
              </S.HashTagDiv>
              <S.TimeDiv>{time}</S.TimeDiv>
            </div>
          </div>
        </S.TopDiv>
        <S.ContentDiv>{write}</S.ContentDiv>
        <S.BottomDiv>
          <S.BottomText>
            <div>조회수&nbsp;{views}</div>
            <div>공감수&nbsp;{like}</div>
          </S.BottomText>
          <S.ButtonDiv>
            {token &&
              (!hover ? (
                <button
                  onMouseEnter={() => {
                    setHover((prev) => !prev);
                  }}
                >
                  이모지 추가
                </button>
              ) : (
                <S.IconDiv
                  hover={hover}
                  onMouseLeave={() => {
                    setHover((prev) => !prev);
                  }}
                >
                  <S.IconInsideDiv>
                    <div id="LIKE" onClick={onEmojiClick}>
                      &#x1F44D;
                    </div>
                    <div id="NICE" onClick={onEmojiClick}>
                      ❤️
                    </div>
                    <div id="FUN" onClick={onEmojiClick}>
                      &#x1F601;
                    </div>
                    <div id="SAD" onClick={onEmojiClick}>
                      &#x1F625;
                    </div>
                    <div id="ANGRY" onClick={onEmojiClick}>
                      &#x1F632;
                    </div>
                    <div id="COOL" onClick={onEmojiClick}>
                      &#x1F621;
                    </div>
                  </S.IconInsideDiv>
                </S.IconDiv>
              ))}

            <button
              onClick={() => {
                onClick(id);
                axios
                  .get(`http://3.36.218.14:8080/posts/${id}`)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              }}
            >
              게시물 보기
            </button>
          </S.ButtonDiv>
        </S.BottomDiv>
      </S.PostDiv>
    </S.Main>
  );
};

export default Post;
