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
    font-size: 30px;
    font-weight: bold;
    padding-top: 15px;
  }
  > div {
    display: flex;
  }
  > div:nth-child(2) > div:nth-child(1) {
    justify-content: flex-end;
  }
  > div:nth-child(2) > div:nth-child(1) > img {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }
  > div:nth-child(2) {
    flex-direction: column;
  }
  > div:nth-child(2) > div {
    width: 100%;
    display: flex;
  }
  > div:nth-child(2) > div:nth-child(2) {
    font-size: 12px;
    @media (max-width: 1300px) {
      font-size: 8px;
    }
  }
`;

export const InputDiv = styled.div`
  width: calc(100% - 20px);
  > input {
    padding-left: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: #f6f6f6;
  border: none;
  height: 35px;
  margin-bottom: 5px;
  :focus {
    outline: none;
  }
`;

export const TextDiv = styled.div`
  font-size: 12px;
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
export const Circle = styled.div`
  border-radius: 11px;
  width: 11px;
  height: 11px;
  border: 0.5px solid #707070;
  margin-right: 5px;
`;

export const LoginButton = styled.button`
  background-color: #6413f2;
  width: 100%;
  color: white;
  font-size: 15px;
  text-align: center;
  height: 35px;
  border: none;
  margin-top: 5px;
  :focus {
    outline: none;
  }
  cursor: pointer;
`;

export const BottomText = styled.div`
  font-size: 15px;
  font-weight: lighter;
  justify-content: center;
  text-align: center;
  margin-top: 80px;
  align-items: bottom;
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
  margin-bottom: 50px;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  top: 0;
  z-index: 100;
`;
