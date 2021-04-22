export type titleType = number | string;
export type nicknameType = string;
export type hashTagType = string[];
export type timeType = string;
export type writeType = string;
export type viewsType = number;
export type likeType = number;
export type onClickType = null;
export type id = number;
export interface User {
  nickname: string;
  email: string;
  createdAt: string;
}
export interface userInfo {
  username: string;
  email: string;
  createdAt: string;
  post_list: object;
}
export interface PostContent {
  author: string;
  comments: [];
  content: string;
  created_at: string;
  emoji: string;
  emoji_count: number;
  images: [];
  tags: string;
  title: string;
  view_count: number;
}
