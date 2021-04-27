import React from "react";
import axios from "axios";
import * as S from "../../../styles/postStyles";

const Emoji = (props: {
  emojiValue: string;
  setEmojiValue;
  hover: boolean;
  setHover;
  id: number;
}) => {
  const emojiObject: Object = {
    LIKE: "👍",
    NICE: "❤️",
    FUN: "😁",
    SAD: "😥",
    ANGRY: "😡",
    COOL: "😮",
  };
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  const { emojiValue, setEmojiValue, hover, setHover, id } = props;
  const onEmojiClick = (e) => {
    if (!emojiValue) setEmojiValue(e.target.id);
    else setEmojiValue(null);
    axios
      .post(
        `http://3.36.218.14:8080/posts/${id}/emoji?status=${e.target.id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
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
            .then((res) => console.log(res))
            .catch((err) => {
              console.log(err.response);
              window.localStorage.clear();
            });
        }
      });
  };
  return (
    <>
      {!emojiValue ? (
        !hover ? (
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
              <>
                <div id="LIKE" onClick={onEmojiClick}>
                  👍
                </div>
                <div id="NICE" onClick={onEmojiClick}>
                  ❤️
                </div>
                <div id="FUN" onClick={onEmojiClick}>
                  😁
                </div>
                <div id="SAD" onClick={onEmojiClick}>
                  😥
                </div>
                <div id="ANGRY" onClick={onEmojiClick}>
                  😡
                </div>
                <div id="COOL" onClick={onEmojiClick}>
                  😮
                </div>
              </>
            </S.IconInsideDiv>
          </S.IconDiv>
        )
      ) : (
        <>
          <S.EmojiDiv>
            <div id={emojiValue} onClick={onEmojiClick}>
              {emojiObject[emojiValue]}
            </div>
          </S.EmojiDiv>
        </>
      )}
    </>
  );
};

export default Emoji;
