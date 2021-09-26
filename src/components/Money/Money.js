import React from 'react';
import './Money.css';

const Money = (props) => {
	const { name, quantity, img } = props.money;
	return (
		<div className='money'>
			<img src={img} alt='' />
			<h2>{name}</h2>
			<h3>Total Notes: {quantity}</h3>
			<button onClick={() => props.donationHandle(props.money)}>
				Donate
			</button>
		</div>
	);
};

export default Money;
