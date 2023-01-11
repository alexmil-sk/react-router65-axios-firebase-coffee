import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router/";
import AuthProvider from "./hoc/AuthProvider/AuthProvider.jsx";



export default function App() {
	return (
		<>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</>
	);
}

