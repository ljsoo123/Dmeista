import styled from "styled-components";

export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
