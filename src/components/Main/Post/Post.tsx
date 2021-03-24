import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "../../../styles/postStyles";
import * as Type from "../../../../types";
import { Store } from "../../../modules/reducer";

const Post = (props: {
  postTitle: Type.titleType;
  postNickName: Type.nicknameType;
  hashTag: Type.hashTagType;
  time: Type.timeType;
  write: Type.writeType;
  views: Type.viewsType;
  like: Type.likeType;
}) => {
  const { postTitle, postNickName, hashTag, time, write, views, like } = props;
  const loginCheck: boolean = useSelector(
    (store: Store) => store.loginCheck.loginCheck
  );
  const [hover, setHover] = useState<boolean>(false);
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
                  if (i !== hashTag.length - 1) return `#${now}, `;
                  else return `#${now}`;
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
          <S.ButtonDiv
            onMouseEnter={() => {
              setHover((prev) => !prev);
            }}
            onMouseLeave={() => {
              setHover((prev) => !prev);
            }}
          >
            {loginCheck &&
              (!hover ? (
                <button>이모지 추가</button>
              ) : (
                <S.IconDiv>
                  <S.IconInsideDiv>
                    <div>&#x1F44D;</div>
                    <div>❤️</div>
                    <div>&#x1F601;</div>
                    <div>&#x1F625;</div>
                    <div>&#x1F632;</div>
                    <div>&#x1F621;</div>
                  </S.IconInsideDiv>
                </S.IconDiv>
              ))}

            <button>게시물 보기</button>
          </S.ButtonDiv>
        </S.BottomDiv>
      </S.PostDiv>
    </S.Main>
  );
};

export default Post;
