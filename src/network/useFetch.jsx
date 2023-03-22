import { useState, useEffect } from 'react';
const BASE_URL = 'http://localhost:3000/api/v1/';
export const useFecth = END => {
	const [items, setItems] = useState([]);
    const [loanding, setLoanding] = useState(true);
    const [error, setErrot]= useState([]);

	useEffect(() => {
		fetch(BASE_URL + END, {
			method: 'GET',
		})
			.then(response => response.json())
			.then(data => setItems(data))
			.catch(error => setErrot(error))
            .finally(()=> setLoanding(false))
	}, []);

	return { items, loanding, error };
};