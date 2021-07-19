import React, { useEffect, useState } from "react";
import "./App.css";
import { getList } from "./services/list.js";
import cardThis from "./components/card.jsx";

function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		let mounted = true;
		getList().then((items) => {
			if (mounted) {
				setList(items);
			}
		});
		return () => (mounted = false);
	}, []);

	return (
		<div
			className="container-fluid"
			style={{ width: "100%", justifyContent: "space-around" }}
		>
			<div
				className="row pb-2 m-3"
				style={{
					paddingBot: "25px",
					paddingTop: "5px",
				}}
			>
				{list.map((item) => (
					<div key={item.id} className="col">
						{cardThis(item)}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
