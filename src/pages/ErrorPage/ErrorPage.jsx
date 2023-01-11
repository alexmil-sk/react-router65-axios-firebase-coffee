import React from 'react'
import { useRouteError, Link} from 'react-router-dom'

export default function ErrorPage() {

	const error = useRouteError();

	return (
		<>
			<div
				className="relative flex flex-col h-[70vh] bg-red-200"
			>
				<div
					className="flex w-[140px] p-5"
				>
					<Link
						to={"/"}
						replace={true}
						state={{ outText: 'You was out of the catalog...' }}
						className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
					>home
					</Link>
				</div>
				<h1 className="absolute text-center left-[0] right-[0] top-[37%] text-[100px] font-bold text-red-500">
					ERROR&nbsp;{error.response.status}
				</h1>
				<div className="text-2xl mt-5 ml-5">
					<p>ERROR_MESSAGE:&nbsp;<strong className="text-red-600">{error.message.toUpperCase()}</strong></p>
					<p>CODE:&nbsp;<strong className="text-red-600">{error.code.toUpperCase()}</strong></p>
					<p>STATUS_CODE:&nbsp;<strong className="text-red-600">{error.response.status}</strong></p>
					<p>STATUS_TEXT:&nbsp;<strong className="text-red-600">{error.response.statusText.toUpperCase() || "Something goes wrong"}</strong></p>
				</div>
			</div>
		</>
	)
}
