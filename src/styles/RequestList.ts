import styled from "styled-components";

export const Text = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
  }
  > div:nth-child(2) {
    font-weight: lighter;
  }
  margin-bottom: 10px;
`;
