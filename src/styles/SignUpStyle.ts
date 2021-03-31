import styled, { css, keyframes } from "styled-components";

interface Props {
  certification: boolean;
}

interface CheckProps {
  check: boolean;
}

interface Certification {
  certification: boolean;
}

interface InCorrect {
  confirm: boolean;
}

interface SameNickNameProps {
  sameCheck: boolean;
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

export const Content = styled.div`
  width: 80%;
  height: 80%;
`;

export const Image = styled.div`
  justify-content: flex-end;
  width: 100%;
  display: flex;
  > img {
    width: 15px;
    height: 15px;
  }
  //margin-bottom: 100px;
  margin-bottom: 50px;
`;

export const LoginHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  > div:nth-child(1) {
    font-size: 30px;
    font-weight: bold;
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
  font-size: 13px;

  > input {
    padding-left: 20px;
    height: 35px;
  }
  > div {
    padding-top: 1px;
    padding-bottom: 1px;
    display: flex;
    width: calc(100% + 21px);
    height: 100%;
    margin-bottom: 5px;
    > input {
      padding-left: 20px;
      border: none;
    }
    > button {
      border: none;
      height: 35px;
    }
  }
`;
export const CheckNumDiv = styled.input`
  width: 80%;
  font-size: 13px;
  height: 35px;
  background-color: #f6f6f6;
  padding-top: 0px;
  padding-bottom: 0px;
  :focus {
    outline: none;
  }
`;

export const CheckNumBtn = styled.button<Props>`
  width: 20%;
  height: 100%;
  background-color: #6413f2;
  color: white;
  text-align: center;
  :focus {
    outline: none;
  }
  ${(props) =>
    props.certification &&
    css`
      background-color: #707070;
    `}
`;

export const CheckNumBtn2 = styled.button<CheckProps>`
  width: 20%;
  height: 100%;
  background-color: #6413f2;
  color: white;
  text-align: center;
  :focus {
    outline: none;
  }
  ${(props) =>
    props.check &&
    css`
      background-color: #707070;
    `}
`;

export const CheckNickNameBtn = styled.button`
  width: 25%;
  height: 100%;
  background-color: #6413f2;
  color: white;
  text-align: center;
  :focus {
    outline: none;
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

export const Button = styled.button`
  width: calc(100% + 22px);
  text-align: center;
  height: 35px;
  color: white;
  background-color: #6413f2;
  font-size: 15px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const TextDiv = styled.div`
  font-size: 15px;
  font-weight: lighter;
  color: #242424;
  text-align: center;
  margin-top: 100px;
  position: fixed;
  bottom: 30px;
  justify-content: center;
  left: 0;
  right: 0;
`;

const imageAnimation = keyframes`
from{
 visibility: visible;
}
to{
visibility: hidden;
}
`;

export const CertificationImg = styled.div<Certification>`
  margin-top: 10px;
  margin-right: 10px;
  position: absolute;
  width: 250px;
  z-index: 1000000;
  transform: translate(640px, -430px);
  visibility: hidden;
  ${(props) =>
    props.certification &&
    css`
      animation: ${imageAnimation};
      animation-duration: 1s;
    `}
`;
export const InCorrectCertification = styled.div<InCorrect>`
  margin-top: 10px;
  margin-right: 10px;
  position: absolute;
  width: 250px;
  z-index: 1000000;
  transform: translate(640px, -430px);
  visibility: hidden;
  ${(props) =>
    props.confirm &&
    css`
      animation-name: ${imageAnimation};
      animation-duration: 1s;
    `}
`;

export const SameNickName = styled.div<SameNickNameProps>`
  margin-top: 10px;
  margin-right: 10px;
  position: absolute;
  width: 250px;
  z-index: 1000000;
  transform: translate(640px, -430px);
  visibility: hidden;
  ${(props) =>
    props.sameCheck &&
    css`
      animation-name: ${imageAnimation};
      animation-duration: 1s;
    `}
`;
