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
import PostContent from "./Post/PostContent";

interface ResPosts {
  author: string;
  checked: boolean;
  content: string;
  created_at: string;
  emoji: any;
  id: number;
  tags: any;
  title: string;
  view: number;
  emoji_count: number;
}

const Main = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  const [posts, setPosts] = useState<ResPosts[]>([]);

  const onPostClick = (id: number) => {
    //history.push(`/post/${id}`);
  };
  useEffect(() => {
    // return;
    axios
      .get<{
        application_responses: ResPosts[];
        total_items: number;
        total_pages: number;
      }>("http://3.36.218.14:8080/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPosts(res.data.application_responses);
        //console.log(12312312);
        console.log(res);
        res.data.application_responses.map((now) => {
          //console.log(now);
          axios
            .get(`http://3.36.218.14:8080/posts/${now.id}/emoji`)
            .then((res) => {})
            .catch((err) => {
              //console.log(err.response);
              if (err.response.status === 401) {
                axios.put(
                  "http://3.36.218.14:8080/auth",
                  {},
                  {
                    headers: {
                      "X-Refresh-Token": refresh_token,
                    },
                  }
                );
              }
            });
        });
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <S.MainDiv>
        <Login />
        <SignUp />
        <NewPost />
        {posts.map(
          (
            {
              id,
              title,
              tags,
              emoji_count,
              author,
              content,
              created_at,
              view,
              emoji,
            },
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
                like={emoji_count}
                emoji={emoji}
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
