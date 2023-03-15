import { useState, useEffect } from 'react';
let BASE_URL = 'http://localhost:3000/api/v1/';
export const useFecth = END => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(BASE_URL + END, {
			method: 'GET',
		})
			.then(response => response.json())
			.then(data => setItems(data))
			.catch(error => console.error(error));
	}, []);

	return { items };
};
