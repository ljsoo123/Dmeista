import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import * as S from "../../../styles/MainStyle";
import * as Type from "../../../../types";
import { useHistory } from "react-router-dom";
import Login from "../../Login/Login";
import { Store } from "../../../modules/reducer";
import SignUp from "../../SignUp/SignUp";
import NewPost from "../../NewPost/NewPost";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import PostContent from "./PostContent";
import { TagContent } from "../../../styles/NewPostStyle";

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

const Search = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  const [posts, setPosts] = useState<ResPosts[]>([]);
  const [postContent, setPostContent] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(0);
  const searchTag = useSelector((store: Store) => store.loginCheck.search);
  const onPostClick = (id: number) => {
    setPostContent(true);
  };

  const getPostFromServer = (token: string, pageNum: number): void => {
    if (token) {
      axios
        .get<{
          application_responses: ResPosts[];
          total_items: number;
          total_pages: number;
        }>(
          `http://3.36.218.14:8080/posts?size=5&page=${pageNum}&tags=${searchTag}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setPosts((prev) => [...prev, ...res.data.application_responses]);
          res.data.application_responses.map((now) => {});
        })
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
                localStorage.setItem("token", res.data.access_token);
                localStorage.setItem("refresh-token", res.data.refresh_token);
              })
              .catch((err) => {
                localStorage.clear();
              });
          }
        });
    } else {
      axios
        .get<{
          application_responses: ResPosts[];
          total_items: number;
          total_pages: number;
        }>(
          `http://3.36.218.14:8080/posts?size=5&page=${pageNum}&tags=${searchTag}`
        )
        .then((res) => {
          setPosts((prev) => [...prev, ...res.data.application_responses]);
        })
        .catch((err) => {});
    }
    //setPageNum(pageNum + 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", infiniteScroll, true);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);
  useEffect(() => {
    getPostFromServer(token, pageNum);
  }, [pageNum]);
  useEffect(() => {
    setPageNum(0);
    setPosts([]);
    getPostFromServer(token, pageNum);
  }, [searchTag]);
  const infiniteScroll = () => {
    let scrollHeight: number = document.documentElement.scrollHeight;
    let scrollTop: number = document.documentElement.scrollTop;
    let clientHeight: number = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPageNum((prev) => prev + 1);
    }
  };

  return (
    <>
      <S.MainDiv>
        <PostContent postContent={postContent} postChange={setPostContent} />
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

export default Search;
