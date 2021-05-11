import React, { useRef, useState, MutableRefObject, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../../../styles/postStyles";
import * as Type from "../../../../types";
import { Store } from "../../../modules/reducer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  postContent,
  postContentSaga,
} from "../../../modules/action/loginCheck";
import Emoji from "./Emoji";

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
    emoji,
  } = props;
  const dispatch = useDispatch();
  const token: string = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  const data: Type.PostContent = useSelector(
    (store: Store) => store.loginCheck.postContent
  );
  const loginCheck: boolean = useSelector(
    (store: Store) => store.loginCheck.loginCheck
  );

  const [hover, setHover] = useState<boolean>(false);
  const [emojiValue, setEmojiValue] = useState<string>(emoji);

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
            {token && (
              <Emoji
                emojiValue={emojiValue}
                setEmojiValue={setEmojiValue}
                hover={hover}
                setHover={setHover}
                id={id}
              />
            )}

            <button
              onClick={() => {
                onClick(id);
                dispatch(postContentSaga(id));
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
