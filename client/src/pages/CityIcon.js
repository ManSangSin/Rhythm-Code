
// city styling classes
const style = (toppx, leftpx) => ({
	position: "absolute",
	top: `${toppx}px`,
	left: `${leftpx}px`,
});

const CityIcon = ({ toppx, leftpx, onClick }) => {
	return (
	// applying city styling classes to div
    <div style={style(toppx, leftpx)}>
      <svg className="cityIconSVG" onClick={onClick}>
        <circle cx="10" cy="10" r="10" />
      </svg>
    </div>
  );
};

export default CityIcon;