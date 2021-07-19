import React from "react";
import { Link } from "react-router-dom";

const detailButton = (item) => {
	const address = `/item/${item.id}`;
	return (
		<Link to={address}>
			<button
				className="btn btn-bg"
				style={{
					color: "#FFF",
					fontSize: 20,
					width: 180,
					height: 50,
					backgroundColor: "#008fd3",
					borderRadius: "0.75rem",
					marginTop: "1.5rem",
				}}
			>
				MORE DETAILS
			</button>
		</Link>
	);
};

export default detailButton;
