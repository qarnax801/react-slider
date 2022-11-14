import { useState } from "react";
import Button from "./controls/Button";
import Dot from "./controls/Dot";

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
  const [state, setState] = useState({
    slideIndex: 0,
  });

  const previousSlide = () => {
    if (state.slideIndex === 0) {
      setState({ ...state, slideIndex: sliderData.length - 1 });
    } else {
      setState({ ...state, slideIndex: state.slideIndex - 1 });
    }
  };

  const nextSlide = () => {
    if (state.slideIndex === sliderData.length - 1) {
      setState({ ...state, slideIndex: 0 });
    } else {
      setState({ ...state, slideIndex: state.slideIndex + 1 });
    }
  };

  const handleActive = (i: any) => {
    if (state.slideIndex === i) {
      return setState({
        ...state,
        slideIndex: state.slideIndex,
      });
    }
    setState({
      ...state,
      slideIndex: i,
    });
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
                    ${slide.id === state.slideIndex ? "card" : "cardHidden"}
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

          {/* Dots */}
          <div className="dots">
            {sliderData.map((slide, i) => (
              <Dot
                i={i}
                handleClick={() => {
                  handleActive(i);
                }}
                key={slide.id}
                active={state.slideIndex === i}
              />
            ))}
          </div>
        </div>
        <Button moveSlide={nextSlide} />
      </div>
    </div>
  );
}
