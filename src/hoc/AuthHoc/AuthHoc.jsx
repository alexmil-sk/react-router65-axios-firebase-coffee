import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";


export default function AuthHoc({children}) {

	const location = useLocation();
	const { isAuth } = useAuth();

	if (!isAuth) {
		return <Navigate to="/login" state={{from: location.pathname}} />
	}

	return children;
}
