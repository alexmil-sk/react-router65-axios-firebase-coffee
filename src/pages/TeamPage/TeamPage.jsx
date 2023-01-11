import React, { Suspense } from 'react'
import { defer, Await, useLoaderData } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader.jsx";
import TeamItem from "./TeamItem/TeamItem.jsx";


export default function TeamPage() {

	const { infoData } = useLoaderData();


	return (
		<div className="text-center mt-5 text-zinc-600 rounded-3xl">
			<h1 className="font-bold text-2xl pb-5">These members of our team have worked for you</h1>
			<Suspense fallback={<div className="flex justify-center my-5"><Loader /></div>}>
				<Await resolve={infoData}>
					{
						<TeamItem />
					}
				</Await>
			</Suspense>
		</div>
	)
}

async function getInfoData() {
	return axios.get('https://myfakeapi.com/api/users/')
		.then(res => res.data)
}


export const TeamPageLoader = async () => {

	return defer({
		infoData: getInfoData()
	});

}