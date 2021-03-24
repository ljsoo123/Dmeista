import React, { useState } from "react";
import * as S from "./styles";

const Header = () => {
  const [isLogined, setIsLogined] = useState<boolean>(true);
  const [name, setName] = useState<string>("이지수");
  return (
    <>
      <S.MainDiv>
        <S.Main>
          <S.MainLeft>
            <S.Title>Dmeista</S.Title>
            <S.Input>
              <input placeholder="태그로 검색하세요! ex) #대마고" />
            </S.Input>
          </S.MainLeft>
          <S.MainRight>
            <S.TextDiv loginCheck={isLogined}>
              {!isLogined ? (
                <>
                  <div>로그인</div>
                  <div>&nbsp;|&nbsp;</div>
                  <div>회원가입</div>
                </>
              ) : (
                <>
                  <button>새 게시물 작성</button>
                  <div>마이페이지</div>
                  <div>
                    <div>{name}&nbsp;님 안녕하세요</div>
                    <div>&nbsp;|&nbsp;</div>
                    <div>로그아웃</div>
                  </div>
                </>
              )}
            </S.TextDiv>
          </S.MainRight>
        </S.Main>
      </S.MainDiv>
    </>
  );
};

export default Header;