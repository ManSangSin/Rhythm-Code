function RhythmItem({ setModalOpen, setSelectedRhythm, rhythms }) {

	const handleRhythmClick = () => {
		setModalOpen(true);
		setSelectedRhythm({ ...rhythms });
		console.log("Clicked selected rhythmmmmmmm", `${rhythms.rhythm}`);
	};
	return (
			<li>
				<button onClick={handleRhythmClick}>{rhythms.rhythm}</button>
			</li>
	);
}

export default RhythmItem;