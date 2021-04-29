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
export interface UserInfo {
  created_at: string;
  email: string;
  username: string;
}
interface FriendResponse {
  connected_at: string;
  email: string;
  id: number;
  nickname: string;
  post_content_item: number;
}
export interface FriendType {
  application_responses: FriendResponse[];
  total_items: number;
}
export interface MyPost {
  author: string;
  checked: boolean;
  content: string;
  created_at: string;
  emoji: string;
  emoji_count: number;
  id: number;
  tags: string;
  title: string;
  view_count: number;
}
interface SubCommentType {
  author: string;
  content: string;
  created_at: string;
  is_mine: boolean;
  sub_comment_id: number;
}
export interface CommentType {
  author: string;
  comment_id: number;
  content: string;
  created_at: string;
  is_mine: boolean;
  sub_comments: SubCommentType[];
}
