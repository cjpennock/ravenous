import React from 'react';
import './BusinessList.css';
// import <Business /> component - we will use it in the BusinessList component
import Business from '../Business/business.js';

class BusinessList extends React.Component {
	render() {
		return (
			// Ask somebody about this callback
			<div className="BusinessList">
			  {this.props.businesses.map(business => {
			  	return <Business 
			  	business={business}
			  	key={business.id} />
			  }
			  	)}
			</div>
			);
	}
};

export default BusinessList;