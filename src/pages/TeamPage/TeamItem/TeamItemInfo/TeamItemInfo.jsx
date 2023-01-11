import React from 'react'

export default function TeamItemInfo({ info }) {

	return (
		<>
			<p className="text-xl">{info.first_name}</p>
			<div
				className="w-[200px] mt-2"
			>
				<img
					src={info.avatar}
					className="w-[100%] shadow-xl shadow-zinc-900 rounded-[50%] bg-neutral-50"
					alt={info.id}
				/>
			</div>
		</>
	)
}




