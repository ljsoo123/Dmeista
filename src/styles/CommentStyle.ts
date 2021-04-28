import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background: black;
  overflow: auto;
  height: 50%;
  justify-content: center;
  display: flex;
`;

export const Input = styled.input`
  width: 400px;
  height: 35px;
  background-color: #f6f6f6;
  border: none;
  justify-items: center;
  margin-top: 13px;
  :focus {
    outline: none;
  }
`;
