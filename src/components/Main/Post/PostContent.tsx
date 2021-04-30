import React, { useEffect, useState, useRef } from "react";
import * as S from "../../../styles/PostContentStyle";
import {
  postContent,
  postContentSaga,
} from "../../../modules/action/loginCheck";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../modules/reducer/index";
import axios from "axios";
import Slider from "./Slider";
import cancelLogin from "../../../../image/cancelLogin.svg";
import Emoji from "./Emoji";
import Comment from "./Comment/Comment";

const PostContent = (props: { postContent: boolean; postChange }) => {
  let { postContent, postChange } = props;
  const dispatch = useDispatch();
  const data = useSelector((store: Store) => store.loginCheck.postContent);
  const id = useSelector((store: Store) => store.loginCheck.id);
  const [images, setImages] = useState<string[]>([]);
  const [totalSlide, setTotalSlide] = useState<number>(0);
  const [emojiValue, setEmojiValue] = useState<string>(data.emoji);
  const [hover, setHover] = useState<boolean>(false);
  const onXClick = () => {
    postChange(false);
  };
  useEffect(() => {
    setEmojiValue(data.emoji);
    setTotalSlide(data.images.length);
    data.images.forEach((now) => {
      axios
        .get(`http://3.36.218.14:8080/image/${now}`, {
          responseType: "arraybuffer",
        })
        .then((res) => {
          //setTotalSlide
          const data = btoa(
            new Uint8Array(res.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setImages((prev) => [...prev, `data:;base64,${data}`]);
        })
        .catch((err) => {});
    });
  }, [data]);

  return (
    <>
      {postContent && (
        <S.Main onClick={() => postChange(false)}>
          <S.MainDiv>
            <S.FlexDiv>
              <Slider images={images} total={totalSlide}></Slider>
            </S.FlexDiv>
            <S.ContentDiv>
              <S.Content>
                <S.CancelDiv>
                  <img src={cancelLogin} onClick={onXClick}></img>
                </S.CancelDiv>
                <S.Header>
                  <div>
                    <S.Title>{data.title}</S.Title>
                    <div>{data.author}</div>
                  </div>
                  <div>
                    <div>
                      <S.ContentState>
                        <div>조회수 {data.view_count}</div>
                        <div>공감수 {data.emoji_count}</div>
                      </S.ContentState>
                    </div>
                    <div>{data.created_at}</div>
                  </div>
                </S.Header>
                <S.ContentText>{data.content}</S.ContentText>
                <S.BottomDiv>
                  <div>{data.tags}</div>
                  <S.ButtonDiv>
                    <Emoji
                      emojiValue={emojiValue}
                      setEmojiValue={setEmojiValue}
                      hover={hover}
                      setHover={setHover}
                      id={id}
                    />
                  </S.ButtonDiv>
                </S.BottomDiv>
              </S.Content>
              <Comment data={data} />
            </S.ContentDiv>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default PostContent;
