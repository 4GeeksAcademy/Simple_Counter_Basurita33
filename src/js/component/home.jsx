import React, { useEffect, useState } from "react";

import Digit from "./digit";


const Home = () => {

	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(true)

	useEffect(() => {
		if (active) {
			setTimeout(() => {
				setTimer(value => value+1)
			}, 1000);
		}		
	}, [timer, active]);

    const startStop = () => setActive(value => !value);

	const resetTimer = () => setTimer(value => value = 0);

	return (
		<main className="text-center">
			<div className="counter-container">
				<Digit number={<span className="fa fa-clock"></span>} />
			    <Digit number={Math.floor((timer / 100000) % 10)} />
			    <Digit number={Math.floor((timer / 10000) % 10)}/>
			    <Digit number={Math.floor((timer / 1000) % 10)} />
			    <Digit number={Math.floor((timer / 100) % 10)} />
			    <Digit number={Math.floor((timer / 10) % 10)} />
			    <Digit number={Math.floor(timer % 10)} />			
		    </div>
			<div className="counter-controller container text-center">
				<h2>Counter Controller</h2>
				<div className="buttons-container">
					<button onClick={startStop} className="mx-3 btn btn-success">Start</button>
					<button onClick={startStop} className="mx-4 btn btn-danger">Stop</button>
					<button onClick={resetTimer} className="mx-3 btn btn-secondary">Reset</button>
				</div>
			</div>

		</main>
		
	);
};

export default Home;
