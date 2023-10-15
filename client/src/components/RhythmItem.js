function RhythmItem({ setModalOpen, setSelectedRhythm, rhythms }) {
	const handleRhythmClick = () => {
		setModalOpen(true);
		setSelectedRhythm({ ...rhythms });
	};
	return (
		<li>
			<button onClick={handleRhythmClick}>{rhythms.rhythm}</button>
		</li>
	);
}

export default RhythmItem;
