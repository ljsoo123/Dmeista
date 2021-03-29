import styled, { css } from "styled-components";
import search from "../../../image/search.png";

export const Main = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
  > div {
    display: flex;
    align-items: center;
  }
`;

export const MainLeft = styled.div`
  width: 70%;
  //justify-content: space-between;
`;
export const MainRight = styled.div``;

export const MainDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #ffffff;
  height: 50px;
  border-bottom: 0.5px solid #242424;
`;
export const MainMedia = styled.div`
  @media (min-width: 1200px) {
    width: 80%;
  }

  @media (min-width: 600px) {
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  font-size: 20px;
`;

export const Input = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 70%;
  > input {
    border-radius: 17px;
    border: 0.5px solid #242424;
    width: 100%;
    height: 34px;
    margin-left: 63px;
    padding-left: 20px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 95% center;
  }
  > input:focus {
    outline: none;
  }
  @media (max-width: 600px) {
  }
`;

interface Props {
  loginCheck: boolean;
}

export const TextDiv = styled.div<Props>`
  font-size: 14px;
  display: flex;
  //justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.loginCheck
      ? css`
          @media (min-width: 1200px) {
            width: 500px;
          }
          @media (max-width: 1076px) {
            font-size: 10px;
          }
          justify-content: space-between;
        `
      : css`
          width: 120px;
        `}
  > button {
    border-radius: 17px;
    border: 0.5px solid #242424;
    background-color: white;
    width: 124px;
    height: 32px;
  }
  > button:focus {
    outline: none;
  }
  > {
    justify-content: space-between;
  }

  > div {
    display: flex;
  }
`;
