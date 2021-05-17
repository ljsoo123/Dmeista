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
