
// city styling classes

const CityIcon = ({ cityName, onClick, lon, lat }) => {

	return (
	// applying city styling classes to div
    <div style={{ position: "absolute", top: lat, left: lon }}>
      <svg onClick={onClick}>
        <circle cx="10" cy="10" r="10" />
      </svg>
    </div>
  );
};

export default CityIcon;