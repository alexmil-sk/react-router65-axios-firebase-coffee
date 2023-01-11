import React, { useState } from 'react';
import { useLocation, useNavigate, Form, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoaderSmall from "../../components/LoaderSmall/LoaderSmall.jsx";


export default function LoginPage() {

	const [errorCode, setErrorCode] = useState(null);

	
	const location = useLocation();
	const navigate = useNavigate();
	
	const fromPage = location.state?.from || "/";
	const { signin, isAuth } = useAuth();
		
	const submitHandlerLogin = (e) => {
		
		const auth = getAuth();
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('user', user);
				signin(user, () => navigate('/iced-coffee' || fromPage, { replace: true }));
			})
			.catch((error) => {
				setErrorCode(error.code);
				console.log(error.message);
			});
	}

	return (
		<div className="flex flex-col justify-center w-[100%] bg-zinc-300 h-[70vh] rounded-xl">
			<h1 className="text-3xl font-bold text-center mb-5">Authorization</h1>

			<Form
				onSubmit={submitHandlerLogin}
				className="flex flex-col shadow-xl shadow-zinc-500 border-[1px] border-zinc-900 w-[400px] items-center mx-[auto] bg-zinc-300 p-5 text-zinc-900 rounded-xl"
				style={{
					border: errorCode ? '2px solid red' : null,
					boxShadow: errorCode ? '0 0 10px 1px red' : null,
				}}
			>
				<div className="flex flex-col w-[100%]">
					<label htmlFor="email" className="text-xl font-bold mb-2">Name</label>
					<input
						id="email"
						name="email"
						type="email"
						className="h-[30px] py-2 px-3 rounded-[10px] text-xl"
					/>
					<small className="text-red-500 text-2xl my-1">
						{
							errorCode === 'auth/invalid-email' && (<p>Please, insert email...</p>)
						}
					</small>
				</div>
				<div className="flex flex-col w-[100%] mt-3">
					<label htmlFor="password" className="text-xl font-bold mb-2">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autoComplete="off"
						className="h-[30px] py-2 px-3 rounded-[10px] text-xl"
					/>
					<small className="text-red-500 text-2xl my-1">
						{
							(errorCode === 'auth/internal-error' || errorCode === 'auth/wrong-password') && (<p>Please, insert right password...</p>)
						}
					</small>
				</div>
				<button
					type="submit"
					className="flex justify-center items-center w-[200px] h-[32px] bg-cyan-700 text-neutral-50 my-5 py-1 px-5 rounded-xl hover:text-yellow-400 active:text-neutral-50"
				>
					{
						isAuth ? (<div className="scale-[0.30]"><LoaderSmall /></div>) : (<div className="uppercase">Log in</div>)
					}
				</button>
				<small className="text-red-500 text-2xl mb-3">
					{
						errorCode === 'auth/user-not-found' && (<p>This user not exist...</p>)
					}
				</small>
				<p className="self-start">Don`t you have an account?&nbsp;
					<Link
						to={'/registration'}
						className="font-bold text-blue-800 underline hover:text-red-600"
					>{isAuth ? null : 'Registration'}
					</Link>
				</p>
				
				
			</Form>
		</div>
	)
}
