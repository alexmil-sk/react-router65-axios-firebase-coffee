import React from 'react';
import { Form } from 'react-router-dom';


export default function CardUpdateForm({ itemCoffee, submitting }) {

	const { id, title, ingredients, description, image } = itemCoffee;


	return (
		<Form
			method="post"
			action={`/coffee/${id}/edit`}
			className="flex flex-col mt-5 justify-center border-[1px] border-zinc-400 rounded-xl w-[50%] p-5 bg-zinc-200"
		>

			<div className="flex flex-col">
				<label htmlFor="id">ID</label>
				<input id="id" type="text" name="id" defaultValue={id} />
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="title">Title</label>
				<input id="title" type="text" name="title" defaultValue={title} />
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="ingradients">Ingradients</label>
				<input id="ingradients" type="text" name="ingradients" defaultValue={ingredients} />
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="description">Description</label>
				<input id="description" type="text" name="description" defaultValue={description} />
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="image">Image</label>
				<input id="image" type="text" name="image" defaultValue={image} />
			</div>

			<button
				type="submit"
				className="bg-green-800 text-white rounded-md mt-5 py-2 cursor-pointer disabled:opacity-50 disabled:bg-zinc-600"
				disabled={submitting}
			>{'Update'.toUpperCase()}</button>
		</Form>
	)
}
