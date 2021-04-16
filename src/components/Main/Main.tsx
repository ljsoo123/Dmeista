import React, { useState, useRef, useEffect } from "react";
import Post from "./Post/Post";
import * as S from "../../styles/MainStyle";
import * as Type from "../../../types";
import { useHistory } from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { Store } from "../../modules/reducer";
import SignUp from "../SignUp/SignUp";
import NewPost from "../NewPost/NewPost";
import axios from "axios";
import { createGlobalStyle } from "styled-components";

interface ResPosts {
  author: string;
  checked: boolean;
  content: string;
  created_at: string;
  emoji: number;
  id: number;
  tags: any;
  title: string;
  view: number;
}

const Main = () => {
  const history = useHistory();

  const [posts, setPosts] = useState<ResPosts[]>([]);

  const onPostClick = (id: number) => {
    history.push(`/post/${id}`);
  };
  useEffect(() => {
    // return;
    axios
      .get<{
        application_responses: ResPosts[];
        total_items: number;
        total_pages: number;
      }>("http://3.36.218.14:8080/posts")
      .then((res) => {
        setPosts(res.data.application_responses);
      })
      .catch(() => alert("error"));
  }, []);
  return (
    <>
      <S.MainDiv>
        <Login />
        <SignUp />
        <NewPost />
        {posts.map(
          (
            { id, title, tags, emoji, author, content, created_at, view },
            i
          ) => {
            const newTag = tags.split(", ");
            return (
              <Post
                postTitle={title}
                postNickName={author}
                hashTag={newTag}
                time={created_at}
                write={content}
                views={view}
                like={emoji}
                onClick={onPostClick}
                key={i}
                id={id}
              />
            );
          }
        )}
      </S.MainDiv>
    </>
  );
};

export default Main;
