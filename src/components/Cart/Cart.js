import React from 'react';
import './Cart.css';

const Cart = (props) => {
	let price = 0;
	let totalPrice = 0;
	let title = '---';
	for (let item of props.noteList) {
		price = item.value;
		totalPrice = totalPrice + price;
		title = item.name;
	}

	return (
		<div className='cart'>
			<h2>Total Donation: {props.noteList.length}</h2>
			<hr />
			<div className='cart-data'>
				<h4>Your Donation: </h4>
				<h4>{title}</h4>
			</div>
			<div className='cart-data'>
				<h4>Amount: </h4>
				<h4>{price} Taka</h4>
			</div>
			<div className='cart-data'>
				<h4>Tota Amount: </h4>
				<h4>{totalPrice} Taka</h4>
			</div>
			<hr />
			<button>Confirm</button>
		</div>
	);
};

export default Cart;
