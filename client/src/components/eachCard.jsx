import React from 'react';
import { useState } from 'react';

export default function EachCard(props) {
	console.log(props)
	let restName;
	let cursor;
	const [hover, setHover] = useState(false);

	if (hover) {
		restName = { "textDecoration": "underline #880015" };
		cursor = { "cursor": "pointer" }
	} else {
		restName = { "textDecoration": "underline white" }
		cursor = { "cursor": "arrow" }
	}

	return (
		<div className="card" onClick={(e) => props.onClick(e)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
			style={cursor}>
			<img className="restImg" src={props.restaurant.img_url}></img>
			<div className="container">
				<h4>
					<div><b className="restName" style={restName}>{props.restaurant.name}</b></div>
					<div>{props.restaurant.style} {props.restaurant.price}</div>
				</h4>
				<div className="zagatImg">
					<img src="https://www.zagat.com/assets/img/z-logo-icon-red.svg"></img>
					<span className="foodRating">FOOD</span>
					<span className="rating">{props.restaurant.rating}</span>
				</div>
				<p>{props.restaurant.description}</p>
			</div>
		</div>
	)
}

//EachRestaurant expects an object