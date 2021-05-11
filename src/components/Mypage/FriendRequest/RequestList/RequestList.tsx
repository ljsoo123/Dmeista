import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../../../modules/reducer";
import * as S from "../../../../styles/RequestList";
import { friendRequestListSaga } from "../../../../modules/action/loginCheck";

const RequestList = () => {
  const dispatch = useDispatch();
  const token: string = localStorage.getItem("token");
  const userData: string[] = useSelector(
    (store: Store) => store.loginCheck.friendRequest
  );
  const [check, setCheck] = useState<boolean[]>(userData.map(() => false));
  const [del, setDel] = useState<boolean[]>(userData.map(() => false));
  return (
    <>
      {userData.length >= 1 &&
        userData[0] != undefined &&
        userData.map((now, i) =>
          !check[i] && !del[i] ? (
            <S.Text key={i}>
              <div>{now}</div>
              <div>
                <div
                  onClick={() => {
                    setCheck((prev) =>
                      prev.map((now, j) => (i === j ? !now : now))
                    );
                    axios
                      .put(`http://3.36.218.14:8080/users/friends/${now}`, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      })
                      .then((res) => {})
                      .catch((err) => {
                        if (err.response.status === 401) {
                          axios.put("http://3.36.218.14:8080/auth", {});
                        }
                      });
                  }}
                >
                  확인
                </div>
                <div>&nbsp;|&nbsp;</div>
                <div
                  onClick={() => {
                    setDel((prev) =>
                      prev.map((now, j) => (i === j ? !now : now))
                    );
                    axios
                      .delete(`http://3.36.218.14:8080/users/friends/${now}`, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      })
                      .then((res) => {})
                      .catch((err) => {
                        if (err.response.status === 401) {
                          axios.put("http://3.36.218.14:8080/auth", {});
                        }
                      });
                  }}
                >
                  삭제
                </div>
              </div>
            </S.Text>
          ) : check[i] && !del[i] ? (
            <S.Text>
              <div>{now}</div>
              <div>
                <div>친구 요청을 받았습니다.</div>
              </div>
            </S.Text>
          ) : (
            <S.Text>
              <div>{now}</div>
              <div>
                <div>친구 요청이 삭제되었습니다.</div>
              </div>
            </S.Text>
          )
        )}
    </>
  );
};

export default RequestList;
