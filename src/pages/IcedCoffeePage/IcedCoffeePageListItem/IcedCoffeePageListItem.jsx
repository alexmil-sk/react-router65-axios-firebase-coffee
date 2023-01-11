import React from 'react';

export default function IcedCoffeePageListItem({ item}) {

	return (
		<li className="relative">
			<span
				className="flex justify-between bg-yellow-700 border-2 border-yellow-900 rounded-xl w-[200px] text-center p-2 shadow-lg shadow-amber-600 hover:shadow-lg hover:shadow-rose-400 hover:bg-rose-400 hover:text-red-900 hover:border-2 hover:border-red-900 active:shadow-inner active:text-red-100"
			>
				{item.title}
				<span
					className="ml-3 bg-neutral-50 px-2 text-yellow-700 rounded-[50%]">
					{item.id}
				</span>
			</span>
		</li>
	)
}
