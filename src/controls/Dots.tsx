import { useState } from "react";
import { SliderDataProps } from "../data/default";

interface DotsProps {
  dotSwitch: (arg: number) => void;
  sliderData: SliderDataProps[];
  custom?: boolean;
}

const Dots = ({ dotSwitch, sliderData, custom = false }: DotsProps) => {
  const [dotState, setDotState] = useState({
    index: 0,
  });

  return (
    <div className="dots">
      {sliderData.map((slide) => {
        return (
          <>
            {custom ? (
              <button
                className={`${
                  dotState.index === slide.id ? "dotActive" : "dot"
                }`}
                onClick={() => {
                  dotSwitch(slide.id);
                  setDotState({ ...dotState, index: slide.id });
                }}
                key={slide.id}
              >
                {slide.id + 1}
              </button>
            ) : (
              <button
                className={`${
                  dotState.index === slide.id ? "dotActive" : "dot"
                }`}
                onClick={() => {
                  dotSwitch(slide.id);
                  setDotState({ ...dotState, index: slide.id });
                }}
                key={slide.id}
              ></button>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Dots;
