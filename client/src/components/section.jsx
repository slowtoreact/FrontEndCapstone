import React from 'react';
import EachCard from './eachCard.jsx';


export function Cards (props) {
	return (
		<div>
			{props.map(card => {
				<EachCard card={card}/>
			})}
		</div>
	)
}