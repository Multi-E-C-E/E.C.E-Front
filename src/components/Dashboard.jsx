import { React } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<h1>Hello Dashboar</h1>
			<Link to='/component'>
				<h1>Componentes</h1>
			</Link>
            <Link to='/tools'>
				<h1>Equpos de medicion</h1>
			</Link>
		</>
	);
};

export default Dashboard;
