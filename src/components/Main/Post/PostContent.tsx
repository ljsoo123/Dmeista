import React, { useEffect, useState } from "react";
import * as S from "../../../styles/PostContentStyle";
import {
  postContent,
  postContentSaga,
} from "../../../modules/action/loginCheck";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../modules/reducer/index";
import axios from "axios";

const PostContent = (props: { postContent: boolean }) => {
  const { postContent } = props;
  const dispatch = useDispatch();
  const data = useSelector((store: Store) => store.loginCheck.postContent);
  const [images, setImages] = useState([]);
  useEffect(() => {
    //dispatch(postContentSaga);
    console.log(data);
    data.images.map((now) => {
      axios
        .get(`http://3.36.218.14:8080/image/${now}`)
        .then((res) => {
          console.log(res);
          setImages([...images, res.data]);
        })
        .catch((err) => console.log(err));
    });
  }, [data]);
  return (
    <>
      {postContent && (
        <S.Main>
          <S.MainDiv>
            <S.ImageDiv>
              {
                /*images.map((now, i) => {
                return <img src={now} key={i} />;
                console.log(now);
              })*/
                <img src={images[0]}></img>
              }
            </S.ImageDiv>
            <S.ContentDiv></S.ContentDiv>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default PostContent;
