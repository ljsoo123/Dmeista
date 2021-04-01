import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  z-index: -1;
`;
export const MainDiv = styled.div`
  width: 60%;
  margin-top: 100px;
  height: 450px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #707070;
  @media (max-width: 700px) {
    width: 100%;
  }
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
`;

export const TextDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleDiv = styled.div`
  font-size: 20px;
  display: flex;
`;

export const ContentDiv = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: lighter;
  > div {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
  }
  > div > div:nth-child(2n) {
    font-weight: normal;
    text-align: left;
    width: 60%;
  }
  > div > div:nth-child(2n-1) {
    width: 40%;
  }
`;
export const BorderDiv = styled.div`
  border-bottom: 1.5px solid #707070;
  width: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const InnerDiv = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 40%;
  }
  > div:nth-child(3) {
    margin-top: 46px;
  }
`;

export const ButtonDiv = styled.div`
  background-color: #6413f2;
  border: 0.5px solid #707070;
  width: 108px;
  height: 30px;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 13px;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FriendButtonDiv = styled.div`
  width: 128px;
  height: 34px;
  border-radius: 17px;
  background-color: white;
  border: 0.5px solid #707070;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const LightDiv = styled.div`
  font-weight: lighter;
`;
