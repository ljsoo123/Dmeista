import React, { useEffect, useRef, useState } from "react";
import * as S from "../../../styles/Slider";
import prev from "../../../../image/prev.svg";
import next from "../../../../image/next.svg";

const Slider = (props: { images: string[]; total: number }) => {
  const { images, total } = props;
  const [totalSlide, setTotalSlide] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= totalSlide) {
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
    console.log(images);
    setTotalSlide(2);
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <>
      <S.ImageDiv>
        <S.SliderContainer ref={slideRef}>
          {images.map((now, i) => {
            return (
              <>
                <img src={now} key={i} />
              </>
            );
          })}
        </S.SliderContainer>
        <S.Button>
          <img src={prev} onClick={prevSlide}></img>
          <img src={next} onClick={nextSlide}></img>
        </S.Button>
      </S.ImageDiv>
    </>
  );
};

export default Slider;
