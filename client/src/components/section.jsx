import React from 'react';
import EachCard from './eachCard.jsx';


export default function Cards (props) {
	// console.log(props.restaurants);
	return (
		<div>
			{props.restaurants.map(restaurant => 
				<EachCard restaurant={restaurant}/>
			)}
		</div>
	)
}