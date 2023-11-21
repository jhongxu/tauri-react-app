import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'virtual:uno.css';
// import App from './App.tsx'
import ErrorPage from './error-page';
import './index.css';

import Root from './routes/root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
	},
]);
const root = document.getElementById('root');

root &&
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	);
