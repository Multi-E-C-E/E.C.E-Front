import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/index.css';
import './css/Styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</>
);
