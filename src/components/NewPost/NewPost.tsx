import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../../styles/NewPostStyle";
import { Store } from "../../modules/reducer/index";
import cancelLogin from "../../../image/cancelLogin.svg";
import { newPostSaga } from "../../modules/action/loginCheck";
import axios from "axios";

const NewPost = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const newPostCheck = useSelector((store: Store) => store.loginCheck.newPost);
  const [autoTag, setAutoTag] = useState<boolean>(false);
  const [content, setContent] = useState<String>("");
  const [imageFile, setImageFile] = useState<object[]>([]);
  const [tags, setTags] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const input = document.getElementById("fileInput");
  const onXClick = () => {
    dispatch(newPostSaga());
  };
  const onCheckBoxChange = (e) => {
    setAutoTag(e.target.checked);
  };
  const onInputChange = (e) => {
    const form = new FormData();
    form.append("attachedImage", e.target.files[0]);
    setImageFile([...imageFile, form]);
    console.log(form);
    console.log(imageFile);
  };
  const onWriteClick = () => {
    console.log(input);
    axios
      .post(
        `http://3.36.218.14:8080/posts?autoTag=${autoTag}&content=${content}&tags=${tags}&title=${title}`,
        {
          imageFile: imageFile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(imageFile);
        dispatch(newPostSaga());
      })
      .catch((err) => {
        console.log(err.response);
        console.log(content);
        console.log(imageFile);
        console.log(tags);
        console.log(title);
      });
  };
  const onCancelClick = () => {
    dispatch(newPostSaga());
  };
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
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(title);
                }}
              />
              <S.InputContent
                placeholder="내용을 입력하세요"
                onChange={(e) => setContent(e.target.value)}
              />
              <S.FlexDiv>
                <S.ImageContent>
                  <div>
                    <S.ImageTag
                      type="checkbox"
                      onChange={onCheckBoxChange}
                      id="checkBox"
                      value="check"
                    ></S.ImageTag>
                    <S.Text>이미지 분석 자동 태그</S.Text>
                    <S.ImageBtn
                      onClick={() => {
                        document.getElementById("fileInput").click();
                      }}
                    >
                      이미지 첨부
                    </S.ImageBtn>
                    <S.fileInput
                      type="file"
                      accept="image/*"
                      multiple
                      id="fileInput"
                      onChange={onInputChange}
                    ></S.fileInput>
                  </div>
                </S.ImageContent>
                <S.TagContent
                  placeholder="태그를 추가해 주세요 ex) #태그"
                  onChange={(e) => setTags(e.target.value)}
                />
              </S.FlexDiv>
              <S.ButtonDiv>
                <S.CancelBtn onClick={onCancelClick}>취소</S.CancelBtn>
                <S.WriteDiv onClick={onWriteClick}>게시물 작성</S.WriteDiv>
              </S.ButtonDiv>
            </S.Content>
          </S.MainDiv>
        </S.Main>
      )}
    </>
  );
};

export default NewPost;
