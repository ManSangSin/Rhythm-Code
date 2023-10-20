import React from "react";
import { Range } from "react-range";
import "./DualRangeSlider.css";

const DualRangeSlider = ({ selectedRange, onChangeRange }) => {
	const min = 1600;
	const max = 2023;
	const step = 50;

	const handleChange = (newValues) => {
		onChangeRange(newValues);
	};

	const railLabels = [1700, 1800, 1900];

	return (
		<div className="dual-range-container">
			<h3 className="range-title">
				Range: {selectedRange[0]} - {selectedRange[1]}
			</h3>
			<div className="range-wrapper">
				<Range
					step={step}
					min={min}
					max={max}
					values={selectedRange}
					onChange={handleChange}
					renderTrack={({ props, children }) => (
						<div {...props} className="range-track">
							{children}
							<div
								className="range-highlight"
								style={{
									width: `${
										((selectedRange[1] - selectedRange[0]) / (max - min)) * 100
									}%`,
									left: `${((selectedRange[0] - min) / (max - min)) * 100}%`,
								}}
							></div>
							{railLabels.map((label, index) => (
								<div
									key={index}
									className="range-label"
									style={{ left: `${((label - min) / (max - min)) * 100}%` }}
								>
									{label}
								</div>
							))}
						</div>
					)}
					renderThumb={({ props }) => (
						<div {...props} className="range-thumb" />
					)}
				/>
			</div>
			<div className="range-values">
				<span>{min}</span>
				<span>{max}</span>
			</div>
		</div>
	);
};

export default DualRangeSlider;
