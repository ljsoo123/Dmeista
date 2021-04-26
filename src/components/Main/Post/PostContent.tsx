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
import prev from "../../../../image/prev.svg";
import next from "../../../../image/next.svg";

const PostContent = (props: { postContent: boolean }) => {
  const { postContent } = props;
  const dispatch = useDispatch();
  const data = useSelector((store: Store) => store.loginCheck.postContent);
  const [images, setImages] = useState<string[]>([]);
  const [totalSlide, setTotalSlide] = useState<number>(0);
  useEffect(() => {
    //dispatch(postContentSaga);
    console.log(data.images.length);
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
        .catch((err) => console.log(err));
    });
  }, [data]);

  return (
    <>
      {postContent && (
        <S.Main>
          <S.MainDiv>
            <S.FlexDiv>
              <Slider images={images} total={totalSlide}></Slider>
            </S.FlexDiv>
            <S.ContentDiv></S.ContentDiv>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default PostContent;
