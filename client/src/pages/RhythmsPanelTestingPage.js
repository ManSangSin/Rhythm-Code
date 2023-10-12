import React, { useState, useEffect } from "react";

function MyMap(){
    const [rhythmCodes, setRhythmCodes] = useState([]);
    const [rhythms, setRhythms] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRhythm, setSelectedRhythm] = useState({});
    const API_Rhythms_URL = "/api/rhythms";
	useEffect(() => {
		fetch(API_Rhythms_URL)
			.then((response) => {
				return response.json();
			})
			.then((rhythms)=>{
                setRhythms(rhythms);
				let rhythmsCodes = rhythms.reduce((acc, rhythm) => {
					const existingRhythm = acc.find((item) => item.rhythm_code === rhythm.rhythm_code);
					if (!existingRhythm) {
						acc.push({
							rhythm_code: rhythm.rhythm_code,
							leftpx: rhythm.leftpx,
							toppx: rhythm.toppx,
						});
					}
					return acc;
				}, []);
				console.log(rhythmsCodes);
				setRhythmCodes(rhythmsCodes);
			})
			.catch((error) => {
				console.error("NOPE! Rhythmssss:", error);
			});
	}, []);
    return <div>
        <span>map</span>
        {rhythmCodes.map((item)=>{
           return <MyRhythmCode key={item.rhythm_code} name={item.rhythm_code} rhythmsList={rhythms} setModalOpen={setModalOpen} setSelectedRhythm={setSelectedRhythm} />;
        })}
        {isModalOpen && <MyModal setModalOpen={setModalOpen} rhythm={selectedRhythm} />}
    </div>;
}

function MyRhythmCode({ name, rhythmsList, setModalOpen, setSelectedRhythm }){
    const [isDropdownShown, setDropdownShown] = useState(false);
    const filteredRhytms = rhythmsList.filter((rhythm)=> rhythm.rhythm_code === name);

    return <div>
        <button onClick={()=> setDropdownShown(!isDropdownShown)}>{name}</button>
        {isDropdownShown && filteredRhytms.map((item)=>{
           return <MyRhythmItem key={item.rhythm} setModalOpen={setModalOpen} setSelectedRhythm={setSelectedRhythm} rhythm={item} />;
        })}
    </div>;
}

function MyRhythmItem({ setModalOpen, setSelectedRhythm, rhythm }){
    const handleRhythmClick = () => {
        setModalOpen(true);
        setSelectedRhythm({ ...rhythm });
    };
    return <li>{rhythm.rhythm}<button onClick={handleRhythmClick}>Click me</button></li>;

}

function MyModal({ rhythm, setModalOpen }){
    return <div>
        {rhythm.description}
        <button onClick={()=> setModalOpen(false)}>Modal is open</button>
    </div>;
}

function MyComponent(){
    return <div>
        <MyMap />

    </div>;
}


export default MyComponent;