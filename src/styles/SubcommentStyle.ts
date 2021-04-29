import styled from "styled-components";

export const Main = styled.div`
  width: 90%;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  font-weight: lighter;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;
export const Input = styled.input`
  width: 90%;
  height: 35px;
  background-color: #f6f6f6;
  border: none;
  margin-top: 13px;
  margin-bottom: 15px;
  :focus {
    outline: none;
  }
`;
export const Change = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Flex = styled.div`
  display: flex;
`;
