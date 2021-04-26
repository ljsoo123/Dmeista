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
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  height: 450px;
  background-color: white;
  border: 0.5px solid #707070;
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
