import styled from "styled-components";

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
  width: 25%;
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
  padding-bottom: 20px;
  z-index: 10000;
  opacity: 1;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  float: right;
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
`;

export const LoginHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  > div:nth-child(1) {
    font-size: 20px;
    font-weight: medium;
  }
`;

export const TextDiv = styled.div`
  font-size: 15px;
  @media (max-width: 1300px) {
    font-size: 8px;
  }
  display: flex;
  font-weight: lighter;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const Image = styled.div`
  justify-content: flex-end;
  width: 100%;
  display: flex;
  align-items: top;
  > img {
    width: 15px;
    height: 15px;
  }
  //margin-bottom: 100px;
  margin-bottom: 20px;
`;
export const BorderDiv = styled.div`
  border-bottom: 1.5px solid #707070;
  width: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
`;
