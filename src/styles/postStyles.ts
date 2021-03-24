import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const PostDiv = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  background-color: white;
  border: 0.5px solid #707070;
`;

export const TitleDiv = styled.div`
  font-size: 20px;
`;

export const NickNameDiv = styled.div`
  font-size: 13px;
`;

export const HashTagDiv = styled.div`
  font-size: 15px;
`;

export const TimeDiv = styled.div`
  font-size: 10px;
  text-align: right;
`;

export const TopDiv = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentDiv = styled.div`
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  > button {
    border-radius: 17px;
    border: 0.5px solid #707070;
    width: 16%;
    background-color: white;
    height: 34px;
  }
  > button:focus {
    outline: none;
  }
`;

export const BottomText = styled.div`
  font-size: 13px;
  display: flex;
  > div:nth-child(1) {
    margin-right: 20px;
  }
`;
