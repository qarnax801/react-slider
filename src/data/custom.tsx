// This is sample data to show how you can customize your data array
export interface SliderDataProps {
  id: number;
  component?: any;
}

export const customSliderData: SliderDataProps[] = [
  {
    id: 0,
    component: (
      <div className="customComponent">
        <p>Hello there</p>
      </div>
    ),
  },
  {
    id: 1,
    component: (
      <div className="customComponent">
        <p>This is another slide</p>
      </div>
    ),
  },
  {
    id: 2,
    component: (
      <div className="customComponent">
        <p>This is the end of the slider</p>
      </div>
    ),
  },
];
