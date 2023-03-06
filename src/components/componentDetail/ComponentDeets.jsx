import { React } from 'react';
import { Link } from 'react-router-dom';

const ComponentDetail = () => {
	return (
		<>
			<h1>Hello FEllow Friend</h1>
			<Link to='/practice'>
				<h5>Practicas</h5>
			</Link>
		</>
	);
};

export default ComponentDetail;
