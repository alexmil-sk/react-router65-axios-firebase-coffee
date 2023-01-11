import React, { Suspense } from 'react';
import { Await, useLoaderData } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import ItemContact from "./ItemContact/ItemContact.jsx";


export default function ContactsPage() {

	const { infoData } = useLoaderData();

	return (
		<div className="text-center mt-5 text-zinc-600  rounded-3xl">
			<h1 className="font-bold text-2xl pb-5">Contact details of our team members</h1>
			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={infoData}>
					{
						<ItemContact />
					}
				</Await>
			</Suspense>
		</div>
	)
}



