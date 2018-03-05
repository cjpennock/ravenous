// credentials
const apiKey = 'vXmornEvje1hX2IQCb7CqKM8nLPcp0j6c7y_LN6w8uqhUiDEWx7IOyBxQA2cVBO4rUPojXe9QyzrC-ozKS_a-HG4y_IPzE_XWfkPS83TC7DXYr3sC-ZtzC8k-lWcWnYx';
// yelp object 
const Yelp = {
	search (term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
			}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count
					}});
			}
		});
	}
};

export default Yelp;