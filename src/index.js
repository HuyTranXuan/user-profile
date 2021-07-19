import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./App.js";
import ItemDetails from "./components/itemDetails.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/item/:id" component={ItemDetails} />
		</Switch>
	</BrowserRouter>,
	rootElement
);
