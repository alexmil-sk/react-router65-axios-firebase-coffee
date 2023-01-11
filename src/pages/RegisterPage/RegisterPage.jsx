import React, { useState } from 'react';
import { useLocation, useNavigate, useNavigation, Form, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoaderSmall from "../../components/LoaderSmall/LoaderSmall.jsx";



export default function RegisterPage() {

	const [errorCode, setErrorCode] = useState(null);

	console.log(errorCode);
	
	const navigation = useNavigation();
	const location = useLocation();
	const navigate = useNavigate();

	const fromPage = location.state?.from || "/";
	const { signup, isAuth } = useAuth();



	const submitHandlerRegister = (e) => {

		const auth = getAuth();
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;


		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				signup(user, () => navigate(fromPage, { replace: true }));
				navigation.state ="Your registration was successfull..."
			})
			.catch((error) => {
				setErrorCode(error.code);
				console.log(error.message);
			});

	}

	return (
		<div className="flex flex-col justify-center w-[100%] bg-zinc-300 h-[70vh] rounded-xl">

			<h1 className="text-3xl font-bold text-center mb-5">Registration</h1>

			<Form
				onSubmit={submitHandlerRegister}
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
							errorCode === 'auth/internal-error' && (<p>Please, insert right password...</p>)
						}
					</small>
				</div>
					<button
						type="submit"
						className="flex justify-center items-center w-[200px] h-[32px] bg-cyan-700 text-neutral-50 my-5 py-1 px-5 rounded-xl hover:text-yellow-400 active:text-neutral-50"
				>
					{
						isAuth ? (<div className="scale-[0.30]"><LoaderSmall /></div>) : (<div className="uppercase">Send</div>)
					}
					</button>
				<small className="text-red-500 text-2xl mb-3">
						{
							errorCode === 'auth/email-already-in-use' && (<p>This user already exist...</p>)
						}
					</small>
				<p className="self-start ">Do you have an account?&nbsp;
					<Link
						to={'/login'}
						className="font-bold text-blue-800 underline hover:text-red-600"
					>
						{isAuth ? null : 'Log in'}
					</Link>
				</p>
			</Form>
		</div>
	)
}
