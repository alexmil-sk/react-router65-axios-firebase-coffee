import React from 'react'
import { useAsyncValue } from "react-router-dom";
import TeamItemInfo from "./TeamItemInfo/TeamItemInfo.jsx";



export default function TeamItem() {

	const infoData = useAsyncValue();

	return (
		<>
			<ul className="flex flex-wrap justify-between max-[704px]:justify-center bg-orange-50 pb-5">
				{
					infoData['Users'].map(info => (

						info.id <= 20 && (
							<li
								className="flex flex-col items-center basis-[15%] m-5"
								key={info.id}
							>
								<TeamItemInfo info={ info} />
							</li>
						)
					
					))
				}
			</ul>
		</>
	)
}
