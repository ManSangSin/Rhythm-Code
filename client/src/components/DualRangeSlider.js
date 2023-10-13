import React from "react";
import { Range } from "react-range";

const DualRangeSlider = ({ selectedRange, onChangeRange }) => {
	const min = 1400;
	const max = 2023;
	const step = 50;

	const handleChange = (newValues) => {
		onChangeRange(newValues);
	};

	const railLabels = [1500, 1600, 1700, 1800, 1900];

	return (
		<div style={{ margin: "20px", maxWidth: "400px" }}>
			<h2>
				Range: {selectedRange[0]} - {selectedRange[1]}
			</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
				}}
			>
				<Range
					step={step}
					min={min}
					max={max}
					values={selectedRange}
					onChange={handleChange}
					renderTrack={({ props, children }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: "6px",
								width: "100%",
								backgroundColor: "#ddd",
								position: "relative",
							}}
						>
							{children}
							<div
								style={{
									position: "absolute",
									height: "6px",
									width: `${
										((selectedRange[1] - selectedRange[0]) / (max - min)) * 100
									}%`,
									backgroundColor: "#007bbb",
									left: `${((selectedRange[0] - min) / (max - min)) * 100}%`,
								}}
							></div>
							{railLabels.map((label, index) => (
								<div
									key={index}
									style={{
										position: "absolute",
										bottom: "-25px",
										left: `${((label - min) / (max - min)) * 100}%`,
										transform: "translateX(-50%)",
									}}
								>
									{label}
								</div>
							))}
						</div>
					)}
					renderThumb={({ props }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: "20px",
								width: "20px",
								backgroundColor: "#007bbb",
								borderRadius: "50%",
								outline: "none",
							}}
						/>
					)}
				/>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<span>{min}</span>
				<span>{max}</span>
			</div>
		</div>
	);
};

export default DualRangeSlider;
// src: https://codesandbox.io/s/multi-range-slider-react-js-forked-4uq1uo?file=/src/component/multiRangeSlider/MultiRangeSlider.js:529-589