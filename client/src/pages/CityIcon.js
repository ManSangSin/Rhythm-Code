const CityIcon = ({ cityName, onClick }) => {

	return (
		<div className={`${cityName.toLowerCase().replace(" ", "-")}-icon`}>
			<svg onClick={onClick}>
				<circle cx="10" cy="10" r="10" />
			</svg>
		</div>
	);
};

export default CityIcon;