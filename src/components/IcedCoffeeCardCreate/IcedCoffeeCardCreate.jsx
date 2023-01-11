import React from 'react';
import { redirect, useParams, useNavigation } from "react-router-dom";
import NewCoffeeCard from "./NewCoffeeCard/NewCoffeeCard.jsx";
import axios from "axios";

export default function IcedCoffeeCardCreate() {

	const { next } = useParams();
	const navigation = useNavigation();
	
	return (
		<div className="flex flex-col items-center my-5">

			<h1 className="page-title">Create Coffee Card ({next})</h1>

			<NewCoffeeCard submitting={navigation.state === 'submitting'} />

		</div>
	)
}

async function createCoffeeCard(card) {


	const res = await axios.post('https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced', card);
	const newCard = await res.data;
	return newCard;


	//=========================================================================================
	// const res = await fetch('https://62e38bb63c89b95396ca9aec.mockapi.io/coffee_iced', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify(card)
	// })

	// const result = await res.json();
	// return result;
	//=========================================================================================

}

export async function createCoffeeCardAction({ request }) {

	const formData = await request.formData();

	const card = {
		id: formData.get('id'),
		title: formData.get('title'),
		ingredients: formData.get('ingredients'),
		description: formData.get('description'),
		image: formData.get('image')
	}

	const newCard = await createCoffeeCard(card);

	return redirect(`/iced-coffee/${newCard.id}`);
}
