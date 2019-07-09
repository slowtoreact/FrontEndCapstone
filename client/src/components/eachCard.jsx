import React from 'react';

export default function EachCard (restaurant) {
	console.log(restaurant.restaurant)
  return (
		<div className="card">
		<div className="container">
		<img src={restaurant.restaurant.img_url}></img>
			<h4><b>{restaurant.restaurant.name}</b></h4> 
			<p>{restaurant.restaurant.description}</p> 
		</div>
	</div>
	)
}

