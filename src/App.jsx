import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/commons/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import ComponentDetail from './components/componentDetail/ComponentDeets';
import MSE from './components/MeasEquip/MeasE';
import { Practice } from './components/practices/practice';
import Background from './components/commons/AnimatedBackgroung';

export const App = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Background />
			<Header />
			<div className={pathname === '/' ? '' : 'mt-4'}>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/component/:id' element={<ComponentDetail />} />
					<Route path='/tools' element={<MSE />} />
					<Route path='/practice' element={<Practice />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
};

const NotFound = () => {
	return (
		<div>
			<h1>404 Not Found</h1>
			<p>La página que buscas no existe.</p>
		</div>
	);
};
