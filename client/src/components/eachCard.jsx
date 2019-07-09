import React from 'react';

export default function EachCard (restaurant) {
	console.log(restaurant.restaurant)
  return (
		<div>
			<p>
			{restaurant.restaurant.name}
			</p>
		</div>
	)
}