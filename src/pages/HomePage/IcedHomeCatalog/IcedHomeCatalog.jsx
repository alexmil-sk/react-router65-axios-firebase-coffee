import React from 'react'
import { useAsyncValue, useNavigate } from "react-router-dom";

export default function IcedHomeCatalog() {

	const icedHome = useAsyncValue();
	const navigate = useNavigate();


	function goToItemIced(id) {
		navigate(`/iced-coffee/${id}`, { replace: false });
		setTimeout(() => {
			window.scrollTo({
				left: 0,
				top: 0,
			})
		}, 1000);
	}

	return (
		<>
			<div className="mt-[50px]">
				<h1 className="text-2xl bg-orange-900 text-white text-center py-5 rounded-t-[30px]">Iced Coffee</h1>
				<ul className="flex flex-wrap justify-between max-[930px]:justify-center bg-orange-50 rounded-b-[30px] pb-5">
					{
						icedHome.map(ice => (
							<li
								className="flex justify-center basis-[25%] m-5"
								key={ice.id}
							>
								<button
									onClick={() => goToItemIced(ice.id)}
									className="flex flex-col items-center"
								>
									<p className="text-xl">{ice.title}</p>
									<div
										className="w-[300px] h-[300px] mt-5"
									>
										<img
											src={ice.image}
											alt={ice.title}
											className="w-[100%] h-[100%] shadow-xl shadow-zinc-900 rounded-[50%] bg-neutral-50 hover:scale-[1.10]"
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
