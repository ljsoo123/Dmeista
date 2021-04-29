import styled from "styled-components";

interface Circle {
  number: number;
}

export const Main = styled.div`
  width: 100vw;
  padding-top: 100px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  height: 100vh;
  top: 0;
  left: 0;
  background: #b9b9b978;
  backdrop-filter: blur(2px);
`;

export const MainDiv = styled.div`
  width: 900px;
  transform: translateY(-25%);
  height: 450px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 1;
`;

export const ImageDiv = styled.div`
  background: black;
  width: 50%;
  height: 100%;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentDiv = styled.div`
  background: white;
  width: 50%;
  height: 100%;
  overflow: auto;
`;

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FlexDiv = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;

export const Content = styled.div`
  height: auto;
  padding: 5%;
  border-bottom: 0.5px solid #d5d5d5;
  > img {
    justify-content: right;
  }
`;

export const CancelDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-weight: lighter;
  margin-bottom: 20px;
  > div:nth-child(2) > div:nth-child(2) {
    justify-content: flex-end;
    text-align: right;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: normal;
`;

export const ContentState = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-between;
  > div:nth-child(1) {
    margin-bottom: 5px;
  }
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContentText = styled.div`
  height: 140px;
  width: 100%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  > button {
    border-radius: 17px;
    border: 0.5px solid #707070;
    background-color: white;
    width: 32%;
    height: 34px;
  }
  > button:focus {
    outline: none;
  }
`;
