import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../../../modules/reducer";
import * as S from "../../../../styles/RequestList";

const RequestList = () => {
  const userData = useSelector(
    (store: Store) => store.loginCheck.friendRequest
  );
  const [check, setCheck] = useState<boolean[]>(
    userData.map((now) => now.check)
  );
  const [del, setDel] = useState<boolean[]>(userData.map((now) => now.del));
  console.log(check, del);

  return (
    <>
      {userData.map((now, i) =>
        !check[i] && !del[i] ? (
          <S.Text key={i}>
            <div>{now.nickname}</div>
            <div>
              <div
                onClick={() => {
                  setCheck((prev) =>
                    prev.map((now, j) => (i === j ? !now : now))
                  );
                  console.log(check);
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
                  console.log(check);
                }}
              >
                삭제
              </div>
            </div>
          </S.Text>
        ) : check[i] && !del[i] ? (
          <S.Text>
            <div>{now.nickname}</div>
            <div>
              <div>친구 요청을 받았습니다.</div>
            </div>
          </S.Text>
        ) : (
          <S.Text>
            <div>{now.nickname}</div>
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
