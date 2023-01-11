import React, { Suspense, useState } from 'react';
import { Link, useLoaderData, useSearchParams, Await, useLocation } from 'react-router-dom';
import axios from "axios";
import CoffeeSearch from "../../components/CoffeeSearch/CoffeeSearch.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import IcedCoffeePageListItem from './IcedCoffeePageListItem/IcedCoffeePageListItem.jsx';


export default function IcedCoffeePage() {

	const location = useLocation().state || '';

	const [isVisible, setIsVisible] = useState(true);
	
	setTimeout(() => {
		setIsVisible(false);
	}, 2000);



	const [searchParams, setSearchParams] = useSearchParams();
	const { coffee } = useLoaderData();

	const coffeeQuery = searchParams.get('title') || '';
	const intervalQueryFive = searchParams.has('interval5');
	const startFromFive = intervalQueryFive ? 5 : 1;


	return (
		<div>
			<h1 className="page-title">Iced Coffee Catalog</h1>

			<div className="my-5 text-center">
				<Link to={`create/${coffee.length + 1}`} >
					<button className=" w-[200px] h-[52px] bg-green-600 text-neutral-50 text-xl p-2 border-2 rounded-xl hover:font-bold hover:shadow-lg hover:shadow-yellow-700 active:font-normal active:shadow-inner">Create Coffee Card</button>
				</Link>
			</div>

			<div className="flex justify-center my-3">
				<CoffeeSearch
					setSearchParams={setSearchParams}
					coffeeQuery={coffeeQuery}
					intervalQueryFive={intervalQueryFive}
				/>
			</div>

			<div className={isVisible ? 'visible' : 'invisible'}>
			{
				location.deleteText && (<div className="w-[267px] relative  mx-[auto] my-3 text-xl font-bold text-lime-700 bg-lime-300 border-[1px] border-lime-700 rounded-xl text-center p-2 shadow-lg shadow-lime-600 ">
					<span>
						{location.deleteText}
						<span
							className="ml-3 bg-neutral-50 px-2 text-lime-700 rounded-[50%]">
							{location.deleteId}
						</span>
					</span>
				</div>)
			}
			</div>

			<ul className="flex flex-wrap justify-center">

				<Suspense fallback={<Loader />}>
					<Await resolve={coffee}>
						{
							(resolvedCoffee) => (
								<>
									{
										resolvedCoffee
											.filter(i => i.title.toLowerCase().includes(coffeeQuery) && i.id >= startFromFive)
											.map(item => (
												<Link
													key={item.id}
													to={`${item.id}`}
													className="mx-5 my-3 text-xl font-bold text-neutral-50"
												>
													<IcedCoffeePageListItem item={ item} />
												</Link>
											))
									}
								</>
							)
						}
					</Await>
				</Suspense>
			</ul>
		</div >
	)
}

async function getIcedCoffeePage() {

	//================================================================================

	// const res = await fetch('https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced');
	// return res.json()

	//================================================================================

	const res = await axios.get('https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced');
	return res.data;
}


export const IcedCoffeePageLoader = async () => {
	return {
		coffee: await getIcedCoffeePage(),
	}
}

