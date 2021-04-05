import styled, { css } from "styled-components";

interface Check {
  check: boolean;
}

interface Done {
  done: boolean;
}

export const Main = styled.div`
  width: 100vw;
  padding-top: 150px;
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
  height: 550px;
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
  font-size: 20px;
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
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
  margin-bottom: 20px;
`;

export const BorderDiv = styled.div`
  border-bottom: 1.5px solid #707070;
  width: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const TextDiv = styled.div`
  font-size: 15px;
  > div {
    font-size: 12px;
    margin-top: 2px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 36px;
`;

export const InputDiv2 = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
`;

export const InputWithBtn = styled.input`
  width: 80%;
  height: 35px;
  background-color: #f6f6f6;
  padding-left: 20px;
  padding-right: 0;
  border: none;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button<Check>`
  width: 20%;
  border: none;
  color: white;
  font-size: 12px;
  ${(props) =>
    props.check
      ? css`
          background-color: #707070;
        `
      : css`
          background-color: #6413f2;
        `}
  height: 35px;
  padding: 0;
  :focus {
    outline: none;
  }
  cursor: pointer;
`;

export const Button2 = styled.button<Done>`
  width: 20%;
  border: none;
  color: white;
  height: 35px;
  text-align: center;
  font-size: 12px;
  align-items: center;
  padding: 0;
  :focus {
    outline: none;
  }
  ${(props) =>
    props.done
      ? css`
          background-color: #707070;
        `
      : css`
          background-color: #6413f2;
        `}
  cursor: pointer;
`;

export const Input = styled.input`
  width: calc(94%);
  margin-top: 5px;
  height: 35px;
  background-color: #f6f6f6;
  border: none;
  padding-left: 20px;
  :focus {
    outline: none;
  }
`;

export const DoneBtn = styled.button`
  color: white;
  background-color: #6413f2;
  width: 100%;
  border: none;
  margin-top: 20px;
  font-size: 15px;
  height: 35px;
  :focus {
    outline: none;
  }
  cursor: pointer;
`;
