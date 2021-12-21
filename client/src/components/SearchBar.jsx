import React from 'react';

import './css/SearchBar.css';

const SearchBar = () => {
	return (
		<section className='search'>
			<div className='search-input-wrapper'>
				<i className='fa fa-search' />
				<input
					className='search-bar'
					type='text'
					placeholder='Search'
				/>
				<i className='fa fa-times' />
			</div>
		</section>
	);
};

export default SearchBar;
