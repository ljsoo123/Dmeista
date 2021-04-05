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

export const ChangeButton = styled.button`
  width: 100%;
  border: 0.5px solid #707070;
  background-color: white;
  padding-left: 20px;
  text-align: left;
  height: 60px;
  margin-bottom: 10px;
`;
