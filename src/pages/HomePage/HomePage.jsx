import React, { useState, Suspense } from 'react';
import { defer, Await, useLocation, useLoaderData, useNavigation } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader.jsx";
import HotHomeCatalog from "./HotHomeCatalog/HotHomeCatalog.jsx";
import IcedHomeCatalog from "./IcedHomeCatalog/IcedHomeCatalog.jsx";


export default function HomePage() {


	const { hotHome, icedHome } = useLoaderData();

	const location = useLocation().state || '';
	let navigation = useNavigation().state || '';

	if (navigation === 'idle' || navigation === 'loading' || navigation === 'submitting') {
		navigation = '';
	}

	const [isVisibleCat, setIsVisibleCat] = useState(true);
	const [isVisibleReg, setIsVisibleReg] = useState(true);

	setTimeout(() => {
		setIsVisibleCat(false);
		setIsVisibleReg(false);
	}, 2000);
	
	return (
		<div className="">
			<h1 className="page-title">List of Coffee</h1>

			<div className={isVisibleCat ? 'visible' : 'hidden'}>
				{
					location.outText && (<div className="mx-[auto] my-3 text-xl font-bold text-lime-700 bg-lime-300 border-[1px] border-lime-700 rounded-xl text-center p-2 shadow-lg shadow-lime-600 ">
						<span>
							{location.outText}
						</span>
					</div>)
				}
			</div>
			<div className={isVisibleReg ? 'visible' : 'hidden'}>
				{
					navigation && (<div className="mx-[auto] my-3 text-xl font-bold text-lime-700 bg-lime-300 border-[1px] border-lime-700 rounded-xl text-center p-2 shadow-lg shadow-lime-600 ">
						<span>
							{navigation}
						</span>
					</div>)
				}
			</div>
			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={icedHome}>
					<IcedHomeCatalog />
				</Await>
			</Suspense>

			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={hotHome}>
					<HotHomeCatalog />
				</Await>
			</Suspense>


		</div>
	)
}

async function getIcedCoffee() {
	return axios.get('https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced')
		.then(res => res.data)
}

async function getHotCoffee() {
	return axios.get('https://api.sampleapis.com/coffee/hot')
		.then(res => res.data)
}

export async function HomePageLoader() {
	return defer({
		hotHome: getHotCoffee(),
		icedHome: getIcedCoffee()
	});
}