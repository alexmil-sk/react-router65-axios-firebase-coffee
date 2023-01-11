import React from 'react'
import { useAsyncValue } from "react-router-dom";


export default function ItemContact() {

	const infoData = useAsyncValue();

	

	return (
		<>
			<ul className="flex flex-wrap justify-between max-[1640px]:justify-center bg-lime-50 shadow-lg shadow-lime-900 rounded-xl">
				{
					infoData['Users'].map(info => (

						info.id <= 20 && (
							<li
								className="w-[420px] m-5 flex justify-between border-[1px] bg-neutral-50 border-lime-600 p-3 rounded-[10%] shadow-lg shadow-lime-900"
								key={info.id}
							>
								<div
									className="flex flex-col m-2 items-start pl-2"
								>
									<p><strong>Name:&nbsp;</strong>{info.first_name}</p>
									<p><strong>Last Name:&nbsp;</strong>{info.last_name}</p>
									<p><strong>Email:&nbsp;</strong>{info.email}</p>
									<p><strong>Phone:&nbsp;</strong>{info.phone}</p>
									<p><strong>Birthdate:&nbsp;</strong>{info.birthdate}</p>
									<p><strong>Job title:&nbsp;</strong>{info.job_title}</p>
									<div className="flex flex-col items-start">
										<p><strong>Address:&nbsp;</strong></p>
										<ul>
											{info.address.map((address, idx) => (
												<li
													className="flex flex-col ml-5 items-start "
													key={idx}
												>
													<p><strong>Street:&nbsp;</strong>{address.street}</p>
													<p><strong>City:&nbsp;</strong>{address.city}</p>
													<p><strong>State:&nbsp;</strong>{address.state}</p>
													<p><strong>Country:&nbsp;</strong>{address.country}</p>
													<p><strong>Postal Code:&nbsp;</strong>{address.postal_code}</p>
												</li>
											))}
										</ul>
									</div>

								</div>
								<div className="flex items-start">
									<img
										src={info.avatar}
										className="w-[70px] shadow-lg shadow-zinc-900 rounded-[50%] bg-neutral-50"
										alt={info.id}
									/>
								</div>
							</li>
						)

					))
				}
			</ul>
		</>
	)
}
