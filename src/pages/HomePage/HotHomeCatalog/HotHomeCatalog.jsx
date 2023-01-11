import React from 'react'
import { useAsyncValue, useNavigate } from "react-router-dom";

export default function HotHomeCatalog() {

	const hotHome = useAsyncValue();
	const navigate = useNavigate();


	function goToItemHot(id) {
		navigate(`/hot-coffee/${id}`, { replace: false });
		setTimeout(() => {
			window.scrollTo({
				left: 0,
				top: 0,
			})
		}, 1000);
	}

	return (
		<>
			<div className="mt-[20px]">
				<h1 className="text-2xl bg-orange-900 text-white text-center py-5 rounded-t-[30px]">Hot Coffee</h1>
				<ul className="flex flex-wrap justify-between max-[930px]:justify-center bg-orange-50 rounded-b-[30px] pb-5 ">
					{
						hotHome.map(hot => (

							hot.id <= 22 &&
							<li
								className="flex justify-center basis-[25%] m-5"
								key={hot.id}
							>
								<button
									onClick={() => goToItemHot(hot.id)}
									className="flex flex-col items-center"
								>
									<p className="text-xl">{hot.title}</p>
									<div
										className="w-[300px] h-[300px] mt-5"
									>
										<img
											src={hot.image}
											className="w-[100%] h-[100%] shadow-xl shadow-zinc-900 rounded-[50%] bg-neutral-50 hover:scale-[1.10]"
											alt={hot.title}
										/>
									</div>
								</button>
							</li>
						))
					}
				</ul>
			</div>
		</>
	)
}
