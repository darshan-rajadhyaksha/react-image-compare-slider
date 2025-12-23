const areEqualFn = (prevProps, nextProps) => {
	return (
		[
			"imageWidth", 
			"imageHeight", 
			"percentage",
			"onSliderChange",
		].every(key => (
			prevProps?.[key] === nextProps?.[key]
		)) &&
		[
			"src",
			"alt"
		].every(key => (
			prevProps?.beforeImage?.[key] === nextProps?.beforeImage?.[key] &&
			prevProps?.afterImage?.[key] === nextProps?.afterImage?.[key]
		)) &&
		[
			"size",
			"borderColor",
			"backgroundColor",
			"activeBackgroundColor",
			"activeBorderColor",
		].every(key => (
			prevProps?.sliderStyles?.[key] === nextProps?.sliderStyles?.[key]
		))
	);
};

export default areEqualFn;