import React, { createContext } from 'react';
import {useLocalStorage} from "../../hooks/useLocalstorage.js";
export const AuthContext = createContext(null);



//fb-test-project in FireBase


export default function AuthProvider({ children }) {

	const [userEmail, setUserEmail] = useLocalStorage('userEmail', null);
	const [userId, setUserId] = useLocalStorage('userId', null);;
	const [userToken, setUserToken] = useLocalStorage('userToken', null);
	const [isAuth, setIsAuth] = useLocalStorage('isAuth', false);

	const signin = (user, cb) => {

		setUserEmail(user.email);
		setUserToken(user.accessToken);
		setUserId(user.uid);
		setIsAuth(true);
		cb();
	}

	const signup = (user, cb) => {
		setUserEmail(user.email);
		setUserToken(user.accessToken);
		setUserId(user.uid);
		setIsAuth(true);
		cb();
}

	const signout = (cb) => {
		setUserEmail(null);
		setUserToken(null);
		setUserId(null);
		setIsAuth(false);
		cb();
	}

	const value = { userEmail, userId, userToken, isAuth, signin, signup, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
