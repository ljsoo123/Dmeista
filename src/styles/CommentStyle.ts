import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

export const Input = styled.input`
  width: 90%;
  height: 35px;
  background-color: #f6f6f6;
  border: none;
  margin-top: 13px;
  margin-bottom: 15px;
  :focus {
    outline: none;
  }
`;

export const Comment = styled.div`
  width: 90%;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Nickname = styled.div`
  font-weight: bold;
  margin-bottom: 3px;
  margin-right: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: lighter;
  > div {
    display: flex;
  }
`;

export const Content = styled.div`
  margin-bottom: 3px;
`;

export const SubCommentStyle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Change = styled.div`
  display: flex;
  flex-direction: row;
`;
