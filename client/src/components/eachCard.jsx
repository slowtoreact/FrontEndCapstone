import React from 'react';

export default function EachCard (restaurant) {
	console.log(restaurant.restaurant)
  return (
		<div className="card">
		<img src={restaurant.restaurant.img_url}></img>
		<div className="container">
			<h4>
				<div><b>{restaurant.restaurant.name}</b></div>
				<div>{restaurant.restaurant.style} {restaurant.restaurant.price}</div>
			</h4> 
			<div className="zagatImg">
				<img src="https://www.zagat.com/assets/img/z-logo-icon-red.svg"></img>
				<span>FOOD {restaurant.restaurant.rating}</span>
			</div>
			<p>{restaurant.restaurant.description}</p> 
		</div>
	</div>
	)
}

