import React, { Suspense } from 'react';
import { Link, useParams, useNavigate, useLoaderData, defer, Await } from "react-router-dom";
import IcedCoffeeItemCard from "../../../components/IcedCoffeeItemCard/IcedCoffeeItemCard.jsx";
import IcedCoffeeItemComments from "../../../components/IcedCoffeeItemComments/IcedCoffeeItemComments.jsx";
import axios from "axios";
import Loader from "../../../components/Loader/Loader.jsx";

export default function IcedCoffeeCardPage() {

	const navigate = useNavigate();
	const { id } = useParams();

	const { itemCoffee, itemComments } = useLoaderData();

	async function delCoffeeDb(id) {
		await axios.delete(`https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced/${id}`);
		navigate('/iced-coffee', { replace: true, state: { deleteText: 'Card was deleted...', deleteId: itemCoffee.id} });
	}

	return (
		<div className="text-xl p-5 mx-[auto] h-[100%] w-[400px] border-4 rounded-xl border-yellow-600 bg-orange-100">

			<div className="flex justify-between items-center">
				<Link
					to="/iced-coffee"
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>format_list_bulleted
				</Link>
				<Link
					to={id > 1 && `/iced-coffee/${id - 1}`}
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>removeundo
				</Link>
				<Link
					to={`/iced-coffee/${+id + 1}`}
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>redoadd
				</Link>
				<Link
					to={"/"}
					state={{ outText: 'You was out of the catalog...' }}
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>home
				</Link>
				<Link
					to="edit"
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>border_color
				</Link>
			</div>
			
			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={itemCoffee}>
					{
						<IcedCoffeeItemCard />
					}
				</Await>
			</Suspense>

			<button
				onClick={() => delCoffeeDb(id)}
				className="w-[100%] flex justify-center items-center my-5 border-[1px] border-white rounded-lg py-[3px] px-1 bg-red-600 text-white shadow-lg shadow-red-900 font-bold text-xl hover:scale-105 active:shadow-inner active:shadow-red-900 active:scale-100 active:border-2 active:border-red-900 active:bg-red-300 active:text-[#A60C00]"
			>
				<div
					className="flex justify-between w-[100%] px-2 pt-1"
				>
					<span className="w-[100%] text-center">DELETE CARD</span>
					<span className="material-symbols-outlined text-2xl font-bold">
						delete
					</span>
				</div>
			</button>

			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={itemComments}>
					{
						<IcedCoffeeItemComments />
					}
				</Await>
			</Suspense>
		</div>
	)
}

async function getIcedCoffeeCardPage(id) {
	//return fetch(`https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced/${id}`)
	//	.then(res => res.json())
	//	.then(data => setItemCoffee(data))

	return axios.get(`https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced/${id}`)
		.then(res => res.data)
}

async function getComments(id) {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
	return res.data;
}


export const IcedCoffeeCardPageLoader = async ({ request, params }) => {
	const id = params.id;

	return defer({
		itemCoffee: await getIcedCoffeeCardPage(id),
		itemComments: getComments(id),
		id
	});

}
