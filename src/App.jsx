import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/commons/Header';
import { Footer } from './components/commons/Footer';
import { Home } from './components/homePage/Home';
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
					<Route path='/' element={<Home />}></Route>
					<Route path='/dashboard' element={<Dashboard />}></Route>
					<Route path='/component/:id' element={<ComponentDetail />}></Route>
					<Route path='/tools' element={<MSE />}></Route>
					<Route path='/practice' element={<Practice />}></Route>
					<Route path='*' element={<Home />}></Route>
				</Routes>
			</div>
			<Footer />
		</>
	);
};
