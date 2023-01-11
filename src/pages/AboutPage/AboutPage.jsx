import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
export default function AboutPage() {
	return (
		<div>
			<h2 className="page-title">About Us</h2>
			<p className="text-lg my-5 text-orange-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam suscipit architecto eveniet neque! Quis, ut soluta commodi a assumenda aspernatur laboriosam tenetur non et ad modi iure impedit beatae dicta ex voluptatum quae provident earum facere? Eos veniam obcaecati, ex error repudiandae officia vitae assumenda, animi consequatur rem soluta enim nisi iusto consectetur impedit saepe possimus provident quibusdam nemo non nostrum, ab quidem dolorem quaerat. Labore soluta, nostrum repudiandae obcaecati quasi iure? Repellat iste expedita incidunt molestias consequatur corporis atque distinctio ut nobis hic, architecto cumque inventore itaque! Fugit totam expedita iusto accusantium earum magni, ipsa eius porro quae repellat.</p>
			<p className="text-lg text-orange-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem provident aliquid perspiciatis optio repellendus consequuntur nobis nisi dicta? Totam esse quo necessitatibus sunt architecto recusandae expedita sit fuga amet consequuntur assumenda sequi eos quos dicta optio incidunt quae, omnis dolorum saepe inventore, non ea facere debitis? Cumque itaque, sapiente est officiis doloribus esse asperiores autem. Velit architecto sint eligendi, libero qui quia ullam quos voluptatem deleniti earum hic similique maxime? Vitae perferendis, inventore eum tempore magni nemo blanditiis saepe quaerat doloremque! Aliquid velit quasi, sunt amet exercitationem eveniet veritatis. Minus nostrum harum ipsam molestiae animi recusandae voluptatum? Eligendi quibusdam eum possimus repudiandae rem accusamus laudantium pariatur in sed, iure officiis. Ipsum libero voluptas incidunt quae doloremque deleniti? Officiis, quis? Rem temporibus consequatur, asperiores porro sit ipsa neque ratione suscipit dignissimos ipsum nobis delectus perspiciatis quo qui, explicabo totam vel aliquam! Molestias soluta assumenda fugiat. Consequuntur, cumque obcaecati. Reprehenderit dolor vitae illum autem voluptatibus dicta distinctio alias ipsum. Recusandae, at. Quod accusantium alias iste tenetur amet quas necessitatibus ut. Facere earum quo voluptate placeat commodi adipisci perferendis, eum cum debitis itaque quisquam numquam ipsum reiciendis incidunt laudantium aliquam atque officia eaque aliquid dolorum corrupti, tempore vel laboriosam recusandae. Dolorum, beatae?</p>
			<hr className="border-orange-600 mt-5" />
			<div className="flex items-center bg-orange-50 h-[80px]">
				<ul className="flex justify-between w-[300px] mx-[auto]">
					<li>
						<NavLink
							to="contacts"
							className={({ isActive }) => isActive ? 'bg-lime-900 text-white text-xl font-bold px-5 py-2 rounded-xl shadow-inner shadow-neutral-50' : 'bg-neutral-50 border-[1px] border-lime-600 text-lime-600 text-xl px-5 py-2 rounded-xl shadow-lg shadow-lime-900'}
						>Contacts
						</NavLink>
					</li>
					<li>
						<NavLink
							to="team"
							className={({ isActive }) => isActive ? 'bg-orange-900 text-white text-xl font-bold px-5 py-2 rounded-xl shadow-inner shadow-neutral-50' : 'bg-neutral-50 border-[1px] border-orange-600 text-orange-600 text-xl px-5 py-2 rounded-xl shadow-lg shadow-orange-900'}
						>
							Our Team
						</NavLink>
					</li>
				</ul>
			</div>
			<hr className="border-orange-600" />
			<Outlet />
		</div>
	)
}
