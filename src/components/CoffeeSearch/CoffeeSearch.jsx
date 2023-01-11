import React, {useState} from 'react'

export default function CoffeeSearch({ intervalQueryFive, coffeeQuery, setSearchParams }) {

	const [searchInputValue, setSearchInputValue] = useState(coffeeQuery);
	const [checkInterval, setCheckInterval] = useState(intervalQueryFive);

	function submitHandle(e) {
		e.preventDefault();
		const form = e.target;

		const searchQuery = form.search.value.toLowerCase();
		const checkboxQuery = form.checkbox.checked;

		const params = {};

		if (searchQuery.length) params.title = searchQuery;
		if (checkboxQuery) params.interval5 = true;
		setSearchParams(params);
	}

	return (
		<form
			onSubmit={submitHandle}
			className="inline-flex flex-col bg-zinc-200 border-[1px] border-zinc-600 p-3  rounded-xl "
			autoComplete="off"
		>
			<div className="flex">
				<div className="flex flex-col">
					<label className="mb-1" htmlFor="search">Search</label>
					<input
						className="border-[1px] border-zinc-400 rounded-l-lg px-2 outline-none focus:outline-sky-400 focus:outline-offset-0"
						type="search"
						name="search"
						id="search"
						onChange={(e) => setSearchInputValue(e.target.value)}
						value={searchInputValue}
					/>
				</div>
				<div className="flex items-end">
					<button
						className="flex text-white items-end border-[1px] bg-zinc-500 border-zinc-900 mx-1 px-1 rounded-r-lg hover:scale-[1.15] active:shadow-inner active:shadow-neutral-50 active:scale-100"
					>
						<span className="material-symbols-outlined">
							search
						</span>
					</button>
				</div>
			</div>

			<div className="flex flex-col w-[65px] mt-3 px-2 py-1 items-center border-[1px]  border-zinc-900  rounded-lg bg-zinc-300">
				<label htmlFor="checkbox">{'id: >4'}</label>
				<input
					onChange={(e) => setCheckInterval(e.target.checked)}
					type="checkbox"
					name="checkbox"
					id="checkbox"
					checked={checkInterval}
				/>
			</div>
		</form>
	)
}
