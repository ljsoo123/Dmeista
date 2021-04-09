import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../../styles/NewPostStyle";
import { Store } from "../../modules/reducer/index";
import cancelLogin from "../../../image/cancelLogin.svg";
import { cancel } from "@redux-saga/core/effects";
import { newPostSaga } from "../../modules/action/loginCheck";

const NewPost = () => {
  const dispatch = useDispatch();
  const newPostCheck = useSelector((store: Store) => store.loginCheck.newPost);
  const onXClick = () => {
    dispatch(newPostSaga());
  };
  const [autoTag, setAutoTag] = useState<boolean>(false);
  const [content, setContent] = useState<String>("");
  const [imageFile, setImageFile] = useState<string[]>([]);
  const [tags, setTags] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  return (
    <>
      {newPostCheck && (
        <S.Main>
          <S.MainDiv>
            <S.Content>
              <S.Image>
                <img src={cancelLogin} onClick={onXClick} />
              </S.Image>
              <S.Header>새 게시물 작성</S.Header>
              <S.InputTitle
                placeholder="제목을 입력하세요"
                onChange={(e) => setTitle(e.target.value)}
              />
              <S.InputContent
                placeholder="내용을 입력하세요"
                onChange={(e) => setContent(e.target.value)}
              />
              <S.FlexDiv>
                <S.ImageContent>
                  <S.ImageTag placeholder="이미지 태그 자동 태그"></S.ImageTag>
                  <S.ImageBtn>이미지 첨부</S.ImageBtn>
                </S.ImageContent>
                <S.TagContent
                  placeholder="태그를 추가해 주세요"
                  onChange={(e) => setTags(e.target.value)}
                />
              </S.FlexDiv>
              <S.ButtonDiv>
                <S.CancelBtn>취소</S.CancelBtn>
                <S.WriteDiv>게시물 작성</S.WriteDiv>
              </S.ButtonDiv>
            </S.Content>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default NewPost;
