import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../../../modules/reducer";
import * as S from "../../../../styles/RequestList";

const RequestList = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);
  const userData = useSelector(
    (store: Store) => store.loginCheck.friendRequest
  );
  return (
    <>
      {userData.map((now) =>
        !check && !del ? (
          <S.Text>
            <div>{now}</div>
            <div>
              <div onClick={() => setCheck(!check)}>확인</div>
              <div>&nbsp;|&nbsp;</div>
              <div onClick={() => setDel(!del)}>삭제</div>
            </div>
          </S.Text>
        ) : check && !del ? (
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
