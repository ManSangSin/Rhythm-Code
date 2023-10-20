import React from "react";
import DualRangeSlider from "./DualRangeSlider";

const RhythmsWithSlider = ({ rhythms, selectedRange, onChangeRange }) => {
	return (
		<div>
			<DualRangeSlider
				selectedRange={selectedRange}
				onChangeRange={onChangeRange}
			/>
			<div>
				{rhythms &&
					rhythms.length > 0 &&
					rhythms.map((rhythm, index) => (
						<div key={index}>{rhythm.rhythm}</div>
					))}
			</div>
		</div>
	);
};

export default RhythmsWithSlider;
