# @neui/react-image-compare-slider
React component to show before-and-after image comparisons with a draggable slider.

![Demo](./assets/demo.gif)

[Open in CodeSandbox](https://codesandbox.io/p/sandbox/neui-react-image-compare-slider-demo-czd2rc)

## Featues
- Keyboard accessible
- Lightweight (~2KB)
- Cross-browser compatible
- Customizable

## Installation
**Using npm**
```bash
npm install @neui/react-image-compare-slider
```

**Using yarn**

```bash
yarn add @neui/react-image-compare-slider
```

## Usage
```jsx
import ImageCompareSlider from "@neui/react-image-compare-slider";

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
/>
```

## Props

| Prop             | Required | Default Value | Description                                                                                       |
|-----------------|----------|---------------|---------------------------------------------------------------------------------------------------|
| beforeImage      | true     | { src: "", alt: "" } | Provide `src` and `alt` for the before image                                                    |
| afterImage       | true     | { src: "", alt: "" } | Provide `src` and `alt` for the after image                                                     |
| imageWidth       | false    | undefined     | Set width of image (px or %)                                                                     |
| imageHeight      | false    | undefined     | Set height of image (px or %)                                                                    |
| defaultPercentage| false    | 50            | Default percentage of slider                                                                     |
| percentage       | false    | undefined     | Controlled prop to update slider position                                                       |
| onSliderChange   | false    | undefined     | Change event handler of slider (receives percentage in params)                                   |
| sliderStyles     | false    | See description | Customize slider appearance. Accepts an object with keys: <br>• `size` – slider thickness <br>• `borderColor` – color of the slider border <br>• `backgroundColor` – slider background color <br>• `activeBorderColor` – border color when active <br>• `activeBackgroundColor` – background color when active |

