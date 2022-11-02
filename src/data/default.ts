export interface SliderDataProps {
  id: number;
  title?: string;
  description?: string;
  [arg: string]: any;
}

export const sliderData: SliderDataProps[] = [
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
