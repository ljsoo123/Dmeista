import React, { useState, useRef } from "react";
import Post from "./Post/Post";
import * as S from "../../styles/MainStyle";
import * as Type from "../../../types";
import { useHistory } from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { Store } from "../../modules/reducer";

const Main = () => {
  const history = useHistory();
  const loginClick = useSelector((store: Store) => store.loginCheck.modalCheck);
  let postRef = useRef<HTMLDivElement>();
  const [title, setTitle] = useState<Type.titleType[]>(["title", 635]);
  const [nickname, setNickname] = useState<Type.nicknameType[]>([
    "kangshinhee",
    "이지수",
  ]);
  const [hashTag, setHashTag] = useState<Type.hashTagType[]>([
    ["ㅎㅇ", "첫 게시물"],
    ["포에버", "635"],
  ]);
  const [time, setTime] = useState<Type.timeType[]>([
    "2020-12-15 10:53:20",
    "2020-12-14 10:52:20",
  ]);
  const [write, setWrite] = useState<Type.writeType[]>([
    "content",
    "(서울=뉴스1) 장지훈 기자 = 올해 고3이 치르는 2022학년도 대학수학능력시험(수능) 시행 계획이 16일 발표된 가운데 입시 전문가들은 국어·수학에 선택과목이 추가되고 모든 과목의 EBS 연계율이 50% 수준으로 축소되는 등 변화에 따른 맞춤형 학습 전략을 세워야 한다고 입을 모은다. 16일 한국교육과정평가원(평가원)에 따르면 오는 11월18일 시행되는 수능은 한국사를 제외한 모든 영역·과목에 2015 개정 교육과정이 적용된다.",
  ]);
  const [views, setViews] = useState<Type.viewsType[]>([10, 20]);
  const [like, setLike] = useState<Type.likeType[]>([23, 30]);
  const onPostClick = (id: number) => {
    history.push(`/post/${id}`);
  };
  return (
    <>
      <S.MainDiv loginClick={loginClick}>
        <Login />
        {title.map((now, i: number) => {
          return (
            <Post
              postTitle={now}
              postNickName={nickname[i]}
              hashTag={hashTag[i]}
              time={time[i]}
              write={write[i]}
              views={views[i]}
              like={like[i]}
              onClick={onPostClick}
              key={i}
              id={i}
            />
          );
        })}
      </S.MainDiv>
    </>
  );
};

export default Main;
