import { useState } from "react";

interface SliderProps {
  fade?: boolean;
  red?: boolean;
  custom: boolean;
}

interface SliderDataProps {
  id: number;
  title?: string;
  description?: string;
  component?: any;
}

  const sliderData: SliderDataProps[] = [
    {
      id: 0,
      title: "first slide",
      description: "This is the first description",
    },
    {
      id: 1,
      title: "second slide",
      description: "This is the second description",
    },
    {
      id: 2,
      title: "third slide",
      description: "This is the third description",
    },
  ];

export async function customLoader() {
  const sliderData = [
    {
      id: 0,
      component: <div className="customComponent"><p>Hello there</p></div>,
    },
    {
      id: 1,
      component: <div className="customComponent"><p>This is another slide</p></div>,
    },
    {
      id: 2,
      component: <div className="customComponent"><p>This is the end of the slider</p></div>,
    },
  ];
  return sliderData;
}

const styles = {
  container: {
    display: "flex",
    width: "80vw",
    margin: "0 auto",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "30px",
    margin: "5vh auto",
    padding: "0 5vw",
  },
  slider: {
    color: "blue",
    fontWeight: "bold",
    fontFamily: "monospace",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  card: {
    margin: "0 auto",
    padding: "0 10px",
    border: "1px solid #000",
    borderRadius: "5px",
    textAlign: "center" as const,
    transition: "2s ease-in",
  },
  cardHidden: {
    display: "none",
  },
  dots: {
    display: "flex",
    gap: "10px",
  },
  dot: {
    height: "30px",
    width: "30px",
    background: "darkgray",
    color: "white",
    textAlign: "center" as const,
  },
  button: {
    background: "orange",
    borderRadius: "20%",
    textAlign: "center" as const,
  },
};

export default function Slider({
  fade = false,
  red = false,
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
    <div style={styles.container}>
      <Button direction="left" moveSlide={previousSlide} />
      <div style={styles.content}>
        <div style={styles.slider}>
          {sliderData.map((slide) => {
            return (
              <>
                {custom ? (
                    <div
                    className={`
                    ${fade && "scuffedCard"}
                    ${red && "redCard"}
                    `}
                    style={
                      slide.id === slideIndex ? styles.card : styles.cardHidden
                    }
                    key={slide.id}
                  >
                  {slide.component}
                  </div>
                ) : (
                  <div
                    className={`
                    ${fade ? "scuffedCard" : ""}
                    ${red ? "redCard" : ""}
                    `}
                    style={
                      slide.id === slideIndex ? styles.card : styles.cardHidden
                    }
                    key={slide.id}
                  >
                    <p>{slide.title}</p>
                    <p>{slide.description}</p>
                  </div>
                )}
              </>
            );
          })}
        </div>
        {/* Dots */}
        <Dots dotSwitch={dotSwitch}/>
      </div>
      <Button direction="right" moveSlide={nextSlide} />
    </div>
  );
}

interface DotsProps {
  dotSwitch: (arg: number) => void;
}

const Dots = ({ dotSwitch }: DotsProps) => {
  return (
    <div style={styles.dots}>
      {sliderData.map((slide) => {
        return (
          <button
            onClick={() => dotSwitch(slide.id)}
            style={styles.dot}
            key={slide.id}
          >
            {slide.id + 1}
          </button>
        );
      })}
    </div>
  );
};

interface ButtonProps {
  direction: string;
  moveSlide: any;
}

const Button = ({ direction, moveSlide }: ButtonProps) => {
  console.log(direction);
  return (
    <button onClick={moveSlide} style={styles.button}>
      B
    </button>
  );
};
