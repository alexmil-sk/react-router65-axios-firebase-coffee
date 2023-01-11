import React from 'react';
import { useActionData, useLoaderData, useNavigation } from 'react-router-dom';
import CardUpdateForm from "./CardUpdateForm/CardUpdateForm.jsx";
import axios from "axios";

export default function IcedCofeeCardUpdate() {

	const { itemCoffee } = useLoaderData();
	const data = useActionData();
	const navigation = useNavigation();


	return (
		<div className="flex flex-col items-center my-5">

			{data?.message && <h1>{data.message}</h1>}

			<h1 className="page-title">Update Coffee Card ({itemCoffee.id})</h1>

			<CardUpdateForm itemCoffee={itemCoffee} submitting={navigation.state === "submitting"} />

		</div>
	)
}

async function updateCoffee(item) {

	// const res = await fetch(`https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced/${item.get('id')}`, {
	// method: 'PUT',
	// body: item
	// });

	// return res.json();

	//======================================================================
	const res = await axios.put(`https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced/${item.get('id')}`, item);
	const newCard = await res.data;
	return newCard;
}

export async function updateCoffeeAction({ request }) {
	const formData = await request.formData();
	
	const updatedCofee = await updateCoffee(formData);

	return { message: `Coffee card ${updatedCofee.title} (${updatedCofee.id}) was updated successfully` };
}
