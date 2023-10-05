
// city styling classes
const cityStyles = {
	"havana-cuba": {
		position: "absolute",
		top: "795px",
		left: "570px",
	},
	"washington-dc": {
		position: "absolute",
		top: "620px",
		left: "570px",
	},
};

const CityIcon = ({ cityName, onClick }) => {
  const cityStyle = cityStyles[cityName.toLowerCase().replace(/[,\s]+/g, "-")]; // to remove any spaces, commas etc. from location data eg. "Havana, Cuba" to match our styling classes above

	return (
	// applying city styling classes to div
    <div style={cityStyle}>
      <svg onClick={onClick}>
        <circle cx="10" cy="10" r="10" />
      </svg>
    </div>
  );
};

export default CityIcon;