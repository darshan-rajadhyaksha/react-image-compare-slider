import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ImageCompareSlider from "./ImageCompareSlider";

const getMockProps = (props = null) => ({
	beforeImage: {
		src: "before-image.jpg",
		alt: "before-image",
	},
	afterImage: {
		src: "after-image.jpg",
		alt: "after-image",
	},
	...props,
});

beforeEach(() => {
	global.ResizeObserver = jest.fn(() => ({
		observe: jest.fn(),
		unobserve: jest.fn(),
		disconnect: jest.fn(),
	}));
})

it('should render image compare slider', () => {
	const props = getMockProps();
	render(<ImageCompareSlider {...props} />);
	console.log(document.body.innerHTML);
	const beforeImage = screen.getByRole("img", { name: props.beforeImage.alt });
	expect(beforeImage).toBeInTheDocument();
	expect(beforeImage).toBeVisible();
	const afterImage = screen.getByRole("img", { name: props.afterImage.alt });
	expect(afterImage).toBeInTheDocument();
	expect(afterImage).toBeVisible();
	const slider = screen.getByRole("slider");
	expect(slider).toBeInTheDocument();
	expect(slider).toBeVisible();
	expect(+(slider.value)).toBe(50); // defaultPercentage is 50
});

it('should set default slider percentage', () => {
	const props = getMockProps({ defaultPercentage: 20 });
	render(<ImageCompareSlider {...props} />);
	const slider = screen.getByRole("slider");
	expect(slider).toBeInTheDocument();
	expect(slider).toBeVisible();
	expect(+(slider.value)).toBe(props.defaultPercentage);
});

it('should set width and height of image', () => {
	const props = getMockProps({ 
		imageWidth: "200px",
		imageHeight: "100px",
	 });
	render(<ImageCompareSlider {...props} />);
	const afterImage = screen.getByRole("img", { name: props.afterImage.alt });
	expect(afterImage).toBeInTheDocument();
	expect(afterImage).toBeVisible();
	expect(afterImage.style.width).toBe(props.imageWidth);
	expect(afterImage.style.height).toBe(props.imageHeight);
});

it('should call onSliderChange handler when slider is changed', async () => {
	const props = getMockProps({
		defaultPercentage: 20,
		onSliderChange: jest.fn(),
	});
	render(<ImageCompareSlider {...props} />);
	const slider = screen.getByRole("slider");
	expect(slider).toBeInTheDocument();
	expect(slider).toBeVisible();
	expect(+(slider.value)).toBe(props.defaultPercentage);
	const newValue = 50;
	fireEvent.change(slider, { target: { value: newValue } });
	expect(props.onSliderChange).toHaveBeenCalled();
	expect(props.onSliderChange).toHaveBeenCalledWith(newValue);
});
