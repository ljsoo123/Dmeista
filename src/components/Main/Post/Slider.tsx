import React, { useEffect, useRef, useState } from "react";
import * as S from "../../../styles/Slider";

const Slider = (props: { images: string[]; total: number }) => {
  const { images, total } = props;
  const [totalSlide, setTotalSlide] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= totalSlide) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    console.log(total);
    setTotalSlide(2);
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <>
      <S.ImageDiv>
        {currentSlide}
        <S.SliderContainer ref={slideRef}>
          {images.map((now, i) => {
            return <img src={now} key={i} />;
          })}
        </S.SliderContainer>
        <S.Button onClick={prevSlide}>Previous Slide</S.Button>
        <S.Button onClick={nextSlide}>Next Slide</S.Button>
      </S.ImageDiv>
    </>
  );
};

export default Slider;
