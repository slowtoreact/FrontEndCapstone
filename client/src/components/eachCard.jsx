import React from 'react';


export default function EachCard (restaurant) {
	let restName;
	if (restaurant.state.hover) {
		restName = { "textDecoration": "underline #880015" }
	} else {restName = {"textDecoration": "underline white"}}

  return (
		<div className="card" onClick={(e) => restaurant.onClick(e)}
		onMouseOver={() => restaurant.onMouseOver()} style={restaurant.style}
			state={restaurant.state} style={restName}>
		<img src={restaurant.restaurant.img_url}></img>
		<div className="container">
			<h4>
				<div><b className="restName">{restaurant.restaurant.name}</b></div>
				<div>{restaurant.restaurant.style} {restaurant.restaurant.price}</div>
			</h4> 
			<div className="zagatImg">
				<img src="https://www.zagat.com/assets/img/z-logo-icon-red.svg"></img>
				<span className="foodRating">FOOD</span>
				<span className="rating">{restaurant.restaurant.rating}</span>
			</div>
			<p>{restaurant.restaurant.description}</p> 
		</div>
	</div>
	)
}

