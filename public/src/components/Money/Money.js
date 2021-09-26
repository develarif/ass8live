import React from 'react';
import './Money.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const Money = (props) => {
	const { name, quantity, img } = props.money;
	return (
		<div className='money'>
			<img src={img} alt='' />
			<h2>{name}</h2>
			<h3>Total Notes: {quantity}</h3>
			<button onClick={() => props.donationHandle(props.money)}>
				Donate
				<FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Money;
