import React from 'react';
import { useAsyncValue } from "react-router-dom";

export default function HotCoffeeItemCard() {

	const itemCoffee = useAsyncValue();

	return (
		<div className="my-5 text-amber-900">
			<h2 className="font-bold text-center">{itemCoffee.title}</h2>

			<img className="my-5 rounded-xl shadow-lg shadow-orange-700/100 mx-[auto]" src={itemCoffee.image} alt={itemCoffee.title} />
			<p><strong>ID:&nbsp;</strong>{itemCoffee.id}</p>
			<p><strong>Description:&nbsp;</strong>{itemCoffee.description}</p>
			<p><strong>Ingredients:&nbsp;</strong>{itemCoffee.ingredients}</p>
		</div>
	)
}
