import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/commons/Header';
import { Footer } from './components/commons/Footer';
import { Home } from './components/homePage/Home';
import { Dashboard } from './components/dashboard/Dashboard';
import { ErrMessague } from './components/errorPage/errorMessage';
import ComponentDetail from './components/componentDetail/ComponentDeets';
import MSE from './components/MeasEquip/MeasE';
import { Practice } from './components/practices/practice';

export const App = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Header />
			<div className={pathname === '/' ? '' : 'mt-5'}>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/dashboard' element={<Dashboard />}></Route>
					<Route path='/component' element={<ComponentDetail />}></Route>
					<Route path='/tools' element={<MSE />}></Route>
					<Route path='/practice' element={<Practice />}></Route>
					<Route path='*' element={<ErrMessague />}></Route>
				</Routes>
			</div>
			<Footer />
		</>
	);
};
