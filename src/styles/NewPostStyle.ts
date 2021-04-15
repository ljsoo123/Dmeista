import styled from "styled-components";

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
  width: 70%;
  transform: translateY(-25%);
  @media (max-width: 1200px) {
  }
  @media (max-width: 600px) {
  }
  height: 600px;
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
  margin-bottom: 16px;
`;

export const Content = styled.div`
  width: 90%;
  height: 90%;
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

export const InputTitle = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 20px;
  border: 0.5px solid #707070;
  background-color: white;
  :focus {
    outline: none;
  }
  margin-bottom: 10px;
`;

export const InputContent = styled.input`
  width: 100%;
  height: 200px;
  padding-left: 20px;
  border: 0.5px solid #707070;
  background-color: white;
  margin-bottom: 10px;
  :focus {
    outline: none;
  }
`;

export const FlexDiv = styled.div`
  width: calc(100% + 23px);
  display: flex;
  justify-content: space-between;
`;

export const ImageContent = styled.div`
  height: 165px;
  width: 49%;
  border: 0.5px solid #707070;
  display: flex;
  > div {
    height: 34px;
    border-bottom: 0.5px solid #707070;
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

export const TagContent = styled.input`
  height: 163px;
  width: 49%;
  border: 0.5px solid #707070;
`;

export const ImageBtn = styled.button`
  width: 25%;
  height: 34px;
  color: white;
  background-color: #242424;
  border: none;
  > input {
    width: 100%;
    height: 100%;
    display: none;
  }
  > input > button {
    width: 100%;
    height: 100%;
  }
  :focus {
    outline: none;
  }
  cursor: pointer;
  @media (max-width: 1200px) {
    font-size: 10px;
  }
`;

export const fileInput = styled.input`
  width: 25%;
  height: 34px;
  color: white;
  background-color: #242424;
  display: none;
`;

export const ImageTag = styled.input`
  border-bottom: 0.5px solid #707070;
  text-align: center;
  //width: 75%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  //height: 31px;
  border-top: none;
  border-left: none;
  border-right: none;
  justify-content: center;
  margin-left: 20px;
  :focus {
    outline: none;
  }
`;

export const ButtonDiv = styled.div`
  width: calc(100% + 22px);
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
`;

export const CancelBtn = styled.button`
  color: white;
  background-color: #707070;
  border: 0.5px solid #707070;
  height: 30px;
  width: 108px;
  cursor: pointer;
`;

export const WriteDiv = styled.button`
  color: white;
  background-color: #6413f2;
  border: 0.5px solid #6413f2;
  height: 30px;
  margin-left: 15px;
  width: 108px;
  cursor: pointer;
`;

export const Text = styled.div`
  width: 70%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 34px;
  line-height: 34px;
`;
