import styled, { keyframes, css } from "styled-components";

interface Props {
  hover: boolean;
}

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
  @media (max-width: 600px) {
    width: 75%;
  }
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
  width: 100%;
  > div > button {
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

export const BottomText = styled.div`
  font-size: 13px;
  display: flex;
  > div:nth-child(1) {
    margin-right: 20px;
  }
`;
const buttonAnimation = keyframes`
0% {
  width: 0%;
}
100% {
  width: 38%;
}`;
export const ButtonDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  > button {
    width: 38%;
    margin-left: 20px;
  }
  > button:focus {
    outline: none;
  }
  > button:nth-child(1):nth-last-child(2):hover {
  }
  cursor: pointer;
`;

export const IconDiv = styled.div<Props>`
  border: 0.5px solid #707070;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  padding-left: 30px;
  padding-right: 30px;
  width: 38%;
  ${(props) =>
    props.hover &&
    css`
      overflow: hidden;
      animation: ${buttonAnimation};
      animation-duration: 0.5s;
    `};
`;

export const IconInsideDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:hover {
    transform: scale(1.5);
  }
`;
