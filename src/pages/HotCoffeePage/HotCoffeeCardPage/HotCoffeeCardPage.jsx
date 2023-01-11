import React, { Suspense } from 'react';
import { Link, useParams, useLoaderData, defer, Await } from "react-router-dom";
import HotCoffeeItemCard from "../../../components/HotCoffeeItemCard/HotCoffeeItemCard.jsx";
import HotCoffeeItemComments from "../../../components/HotCoffeeItemComments/HotCoffeeItemComments.jsx";
import axios from "axios";
import Loader from "../../../components/Loader/Loader.jsx";

export default function HotCoffeeCardPage() {

	const { id } = useParams();

	const { itemCoffee, itemComments } = useLoaderData();

	return (
		<div className="text-xl p-5 mx-[auto] h-[100%] w-[400px] border-4 rounded-xl border-yellow-600 bg-orange-100">

			<div className="flex justify-between items-center">
				<Link
					to="/hot-coffee"
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>format_list_bulleted
				</Link>
				<Link
					to={id > 1 && `/hot-coffee/${id - 1}`}
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>removeundo
				</Link>
				<Link
					to={`/hot-coffee/${+id + 1}`}
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>redoadd
				</Link>
				<Link
					to={"/"}
					state={{ outText: 'You was out of the catalog...' }}
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>home
				</Link>
			</div>
			
			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={itemCoffee}>
					{
						<HotCoffeeItemCard />
					}
				</Await>
			</Suspense>

			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={itemComments}>
					{
						<HotCoffeeItemComments />
					}
				</Await>
			</Suspense>
		</div>
	)
}

async function getHotCoffeeCardPage(id) {
	//return fetch(`https://api.sampleapis.com/coffee/hot/${id}`)
	//	.then(res => res.json())
	//	.then(data => setItemCoffee(data))

	return axios.get(`https://api.sampleapis.com/coffee/hot/${id}`)
		.then(res => res.data)
}

async function getComments(id) {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
	return res.data;
}


export const HotCoffeeCardPageLoader = async ({ request, params }) => {
	const id = params.id;

	return defer({
		itemCoffee: await getHotCoffeeCardPage(id),
		itemComments: getComments(id),
		id
	});

}
