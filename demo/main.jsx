import ReactDOM from "react-dom/client";
import ImageCompareSlider from "../src";

const App = () => {
  return (
    <div>
      <ImageCompareSlider 
        beforeImage={{
          src: "https://picsum.photos/id/65/800/450?grayscale",
          alt: "Before image"
        }}
        afterImage={{
          src: "https://picsum.photos/id/65/800/450",
          alt: "After image"
        }}
        defaultPercentage={20}
        sliderStyles={{
          size: 10
        }}
      />
    </div>
  )
}

const reactRoot = ReactDOM.createRoot(
  document.querySelector("#root")
);
reactRoot.render(<App />);
