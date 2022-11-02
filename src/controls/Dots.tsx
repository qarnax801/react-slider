import { SliderDataProps } from "../data/default";

interface DotsProps {
  dotSwitch: (arg: number) => void;
  sliderData: SliderDataProps[];
  custom?: boolean;
}

const Dots = ({ dotSwitch, sliderData, custom = false }: DotsProps) => {
  return (
    <div className="dots">
      {sliderData.map((slide) => {
        return (
          <>
            {custom ?
            <button
              className="dot"
              onClick={() => dotSwitch(slide.id)}
              key={slide.id}
            >
              {slide.id + 1}
            </button>
            :
            <button
              className="dot"
              onClick={() => dotSwitch(slide.id)}
              key={slide.id}
            >
            </button>}
          </>
        );
      })}
    </div>
  );
};

export default Dots;
