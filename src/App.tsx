import Slider from "./Slider"
import { sliderData } from "./data/default"
import { customSliderData } from "./data/custom"
import './app.scss'

export default function App() {
  return (
    <div>
      <Slider faded colored sliderData={sliderData}/>
      {/*
      - Needs proper style customization
      <Slider sliderData={customSliderData} custom/>
      */}
    </div>
  )
}