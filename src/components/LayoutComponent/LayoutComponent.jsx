import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import CustomLink from "../UI/CustomLinkComponent/CustomLinkComponent.jsx";
import useAuth from "../../hooks/useAuth.js";


const active = ({ isActive }) => isActive ? 'active-link' : null;

export default function LayoutComponent() {

	const navigate = useNavigate();

	const { signout, isAuth } = useAuth();

	return (
		<div className="w-[90vw] mx-[auto] my-5 border-l-[1px] border-r-[1px] border-amber-900 rounded-l-xl rounded-r-xl">
			<header className="relative flex bg-amber-900 h-[50px] text-white rounded-t-xl">
				<div
					className="flex justify-center items-center text-center mx-[auto]"
				>
					<Link to="/" className="w-[80px] mr-5">
						<div>
						<img
							src={logo}
							alt="logo"
							className="mr-[50px] mt-[40px] rounded-[50%] border-1 border-neutral-900 h-[80px] w-[100%] shadow-xl shadow-zinc-600/100 hover:shadow-amber-900/100  active:shadow-amber-600/100"
						/>
						</div>
					</Link>
					<nav className="flex justify-between min-w-[450px]">
						<CustomLink to="/">Home</CustomLink>
						<NavLink className={active} to="/iced-coffee">Iced Coffee</NavLink>
						<NavLink className={active} to="/hot-coffee">Hot Coffee</NavLink>
						<NavLink className={active} to="/about">About Us</NavLink>
						<button
							className="flex items-center hover:text-yellow-200 active:text-white"
							onClick={() => signout(() => navigate("/login", { replace: true }))}
						>
							<span className="material-symbols-outlined">
								logout
							</span>
							<span>
								Log out
							</span>
						</button>
					</nav>
				</div>
				<div className="absolute right-[30px] top-[55px] flex w-[250px] items-center justify-between ">
				{
					isAuth ? null : (<Link
						to="/login"
					>
						<button
								className="flex items-center border-[1px] py-1 px-2 rounded-lg bg-lime-700 shadow-lg shadow-lime-900 hover:text-yellow-200 hover:border-yellow-200 active:text-white active:border-white active:shadow-inner"
						>
							<span className="material-symbols-outlined">
								login
							</span>
							<span>
								Log in
							</span>
						</button>
						</Link>)
					}
				{
					isAuth ? null : (

						<Link
							to="/registration"
						>
							<button
									className="flex items-center border-[1px] py-1 px-2 rounded-lg bg-orange-700 shadow-lg shadow-orange-900 hover:text-yellow-200 hover:border-yellow-200 active:text-white active:border-white active:shadow-inner"
							//onClick={() => navigate("/registration", { replace: false })}
							>
								<span className="material-symbols-outlined">
									how_to_reg
								</span>
								<span>
									Registration
								</span>
							</button>
						</Link>
					)}
				</div>
			</header>

			<main className="m-[55px] p-5 border-[1px] border-amber-600 min-h-[50vh] rounded-xl">
				<Outlet />
			</main>

			<footer className="bg-amber-700 min-h-[25px] text-white text-center py-2 rounded-b-xl">
				<div>
					2022
				</div>
			</footer>
		</div>
	)
}
