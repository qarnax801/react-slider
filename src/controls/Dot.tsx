import React from "react";

interface DotProps {
  active: boolean;
  handleClick: any;
  i: any;
}

const Dot = ({ active, handleClick, i }: DotProps) => {
  return (
    <div className="dot">
      <svg height="20" width="20">
        <circle
          cx="10"
          cy="10"
          r="10"
          strokeWidth="0"
          id={i}
          onClick={() => {
            handleClick();
          }}
          style={{ fill: active ? "#CCC" : "#000", cursor: "pointer" }}
        />
      </svg>
    </div>
  );
};

export default Dot;
