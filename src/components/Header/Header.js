import React from 'react';
import Logo from '../../logo.png';
import './Header.css';

const Header = () => {
	return (
		<header>
			<div className='header-container'>
				<div className='row'>
					<div className='logo'>
						<img src={Logo} alt='' />
					</div>
					<div className='right'>
						<h1>
							Please, Help us by giving some money from our bank
							:)
						</h1>
						<p>
							We are an organization who is helping peoples and
							making work-place for the borolok polapain.
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
