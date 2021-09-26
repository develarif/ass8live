import React, { useEffect, useState } from 'react';
import './Content.css';
import Money from '../Money/Money';
import Cart from '../Cart/Cart';

const Content = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNotes, setSelectedNotes] = useState([]);

	useEffect(() => {
		fetch('./data.json')
			.then((res) => res.json())
			.then((data) => setNotes(data));
	}, []);

	const donationHandle = (selectedMoney) => {
		const currentNotes = [...selectedNotes, selectedMoney];
		setSelectedNotes(currentNotes);
	};

	return (
		<section className='notes-area'>
			<div className='notes-container'>
				<div className='row'>
					<div className='notes-list'>
						<h1>Please Select Your Donations</h1>
						<hr />
						<div className='notes'>
							{notes.map((note) => (
								<Money
									money={note}
									key={note.name}
									donationHandle={donationHandle}></Money>
							))}
						</div>
					</div>
					<div className='cart-list'>
						<Cart noteList={selectedNotes}></Cart>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Content;
