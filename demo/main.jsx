import ReactDOM from "react-dom/client";
import ImageCompareSlider from "../src";

function App() {
  return (
    <div>
      <ImageCompareSlider 
        beforeImage="https://picsum.photos/id/65/800/450?grayscale"
        afterImage="https://picsum.photos/id/65/800/450"
        defaultPercentage={20}
      />
    </div>
  )
}

const reactRoot = ReactDOM.createRoot(
  document.querySelector("#root")
);
reactRoot.render(<App />);
