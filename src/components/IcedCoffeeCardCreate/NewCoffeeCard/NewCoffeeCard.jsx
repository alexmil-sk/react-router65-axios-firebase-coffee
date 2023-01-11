import React from 'react';
import { Form, useParams } from "react-router-dom";

export default function NewCoffeeCard({ submitting}) {

	const { next } = useParams();
	const defaultImageCoffee = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/414a4372324925.5be35bf65bc8f.jpg';

	return (
		<Form
			method="post"
			action={`/iced-coffee/create/${next}`}
			className="flex flex-col mt-5 justify-center border-[1px] border-zinc-400 rounded-xl w-[50%] p-5 bg-zinc-200">

			<div className="flex flex-col">
				<label htmlFor="id">ID</label>
				<input
					className="bg-yellow-100 px-1 text-zinc-900"
					id="id"
					type="text"
					name="id"
					defaultValue={next}
				/>
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="title">Title</label>
				<input id="title" type="text" name="title" />
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="ingredients">Ingredients</label>
				<input id="ingredients" type="text" name="ingredients" />
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="description">Description</label>
				<input id="description" type="text" name="description" />
			</div>

			<div className="flex flex-col my-2">
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="text"
					name="image"
					defaultValue={defaultImageCoffee}
				/>
			</div>

			<button
				type="submit"
				className="bg-green-800 text-white rounded-md mt-5 py-2 cursor-pointer disabled:opacity-50 disabled:bg-zinc-600"
				disabled={submitting}
			>
				{'Create'.toUpperCase()}
			</button>
		</Form>
	)
}
