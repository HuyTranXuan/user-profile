import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getList } from "../services/list.js";

function ItemDetails() {
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

	const { id } = useParams();

	return (
		<div className="">
			<div
				className="card border border-dark p-2"
				style={{
					width: "18rem",
					backgroundColor: "#fff",
					marginTop: "10%",
					marginBottom: "2rem",
					marginLeft: "40%",
					boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1)",
					fontWeight: "bold",
				}}
			>
				{list.map((item) =>
					item.id == id ? (
						<div key={item.id} className="col">
							<p>-name: {item.name}</p>
							<p>-username: {item.username}</p>
							<p>-email: {item.email}</p>
							<p>-phone: {item.phone}</p>
							<p>-company: {item.company.name}</p>
							<p>-website: {item.website}</p>
							<p>-address: </p>
							<ul>
								<li>street:{item.address.street}</li>
								<li>suite:{item.address.suite}</li>
								<li>city:{item.address.city}</li>
								<li>zipcode:{item.address.zipcode}</li>
							</ul>
						</div>
					) : (
						<div key={item.id}></div>
					)
				)}
			</div>
		</div>
	);
}
export default ItemDetails;
