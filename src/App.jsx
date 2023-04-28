import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/commons/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import ComponentDetail from './components/componentDetail/ComponentDeets';
import MSE from './components/MeasEquip/MeasE';
import { Practice } from './components/practices/practice';
import Background from './components/commons/AnimatedBackgroung';
import { NotFound } from './components/errorPage/PageNotFound';
import { UsInfo } from './components/homePage/us';

export const App = () => {
	const { pathname } = useLocation();
	return (
		<>
			<Header />

			<div className={pathname === '/' || pathname === '/us' ? '' : 'mt-4'}>
				<Background />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Dashboard /> <UsInfo />{' '}
							</>
						}
					/>
					<Route path='/component/:id' element={<ComponentDetail />} />
					<Route path='/tools' element={<MSE />} />
					<Route path='/practice' element={<Practice />} />
					<Route path='/us' element={<UsInfo />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
};
