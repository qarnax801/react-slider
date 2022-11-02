interface ButtonProps {
  direction?: string;
  moveSlide: any;
}

const Button = ({ direction = "Right", moveSlide }: ButtonProps) => {
  return (
    <div>
      <button
        className={`button ${direction && `button${direction}`}`}
        onClick={moveSlide}
      >
        {">"}
      </button>
    </div>
  );
};

export default Button;
