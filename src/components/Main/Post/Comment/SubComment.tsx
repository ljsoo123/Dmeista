import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "../../../../styles/SubcommentStyle";

interface SubComment {
  author: string;
  content: string;
  created_at: string;
  is_mine: boolean;
  sub_comment_id: number;
}
const SubComment = (props: { data: SubComment[] }) => {
  const { data } = props;
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  const [change, setChange] = useState<boolean>(false);
  const [changeText, setChangeText] = useState<string>("");

  const onChangeClick = () => {
    setChange((prev) => !prev);
  };
  const onChangeInputChange = (e) => {
    setChangeText(e.target.value);
  };

  return (
    <>
      {data.map((now) => (
        <S.Main>
          <S.Header>
            <S.Flex>
              <S.Title>{now.author}</S.Title>
              {now.is_mine && (
                <S.Change>
                  <div onClick={onChangeClick}>수정</div>
                  <div>&nbsp;|&nbsp;</div>
                  <div
                    onClick={() => {
                      axios
                        .delete(
                          `http://3.36.218.14:8080/comments/sub/${now.sub_comment_id}`,
                          { headers: { Authorization: `Bearer ${token}` } }
                        )
                        .then((res) => {})
                        .catch((err) => {
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
                              .then((res) => {
                                localStorage.setItem(
                                  "token",
                                  res.data.access_token
                                );
                                localStorage.setItem(
                                  "refresh-token",
                                  res.data.refresh_token
                                );
                              })
                              .catch((err) => {
                                localStorage.clear();
                              });
                          }
                        });
                    }}
                  >
                    삭제
                  </div>
                </S.Change>
              )}
            </S.Flex>
            <div>{now.created_at}</div>
          </S.Header>
          <div>{now.content}</div>
          {change && (
            <S.Input
              placeholder="수정할 답글을 입력하세요"
              onChange={onChangeInputChange}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  axios
                    .patch(
                      `http://3.36.218.14:8080/comments/sub/${now.sub_comment_id}`,
                      { content: changeText },
                      { headers: { Authorization: `Bearer ${token}` } }
                    )
                    .then((res) => {})
                    .catch((err) => {
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
                          .then((res) => {
                            localStorage.setItem(
                              "token",
                              res.data.access_token
                            );
                            localStorage.setItem(
                              "refresh-token",
                              res.data.refresh_token
                            );
                          })
                          .catch((err) => {
                            localStorage.clear();
                          });
                      }
                    });
                }
              }}
            ></S.Input>
          )}
        </S.Main>
      ))}
    </>
  );
};

export default SubComment;
