import React from 'react';
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/images/404.jpg";

export default function NotFoundPage() {

	return (
		<div
			className="relative h-[70vh] w-[100%] rounded-[20px]"
			style={{ background: `url(${notFoundImage}) center/cover no-repeat`}}
			//style={{ backgroundImage: `url(${require("../../assets/images/404.jpg")})`}}
		>
			<div className="absolute m-5">
				<Link
					to={"/"}
					state={{ outText: 'You was out of the catalog...' }}
					className="material-symbols-outlined flex justify-center items-center border-[2px] border-white rounded-lg py-1 px-2 bg-yellow-600 text-white shadow-lg shadow-yellow-600 font-bold text-2xl hover:scale-105 active:bg-[#FFB873] active:shadow-inner active:shadow-yellow-600 active:scale-100 active:border-2 active:border-[#A65200] active:text-[#A65200]"
				>home
				</Link>
			</div>

		</div>
	)
}
