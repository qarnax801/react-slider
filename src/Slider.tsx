import { useState } from "react";
import Button from "./controls/Button";
import Dots from "./controls/Dots";

import { SliderDataProps } from "./data/default";

interface SliderProps {
  sliderData: SliderDataProps[];
  faded?: boolean;
  colored?: boolean;
  custom?: boolean;
}

export default function Slider({
  sliderData,
  faded = false,
  colored = false,
  custom = false,
}: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const previousSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(sliderData.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextSlide = () => {
    if (slideIndex === sliderData.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const dotSwitch = (id: number) => {
    setSlideIndex(id);
  };

  return (
    <div className="theSlider">
      <div className="container">
        <Button direction="Left" moveSlide={previousSlide} />
        <div className="content">
          <div className="slider">
            {sliderData.map((slide) => {
              return (
                <div
                  className={`
                    ${slide.id === slideIndex ? "card" : "cardHidden"}
                    ${`` /* List slide effects down here */}
                    ${faded ? "cardFaded" : ""}
                    ${colored ? "cardColored" : ""}
                    `}
                  key={slide.id}
                >
                  {custom ? (
                    <div>{slide.component}</div>
                  ) : (
                    <div>
                      <p>{slide.title}</p>
                      <p>{slide.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Dots dotSwitch={dotSwitch} sliderData={sliderData} />
        </div>
        <Button moveSlide={nextSlide} />
      </div>
    </div>
  );
}
