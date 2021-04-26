import styled from "styled-components";

export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
`;
export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  > img {
    width: 100%;
    height: 100%;
  }
`;
export const Button = styled.div`
  width: 50%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  transform: translateY(-220px);
`;
