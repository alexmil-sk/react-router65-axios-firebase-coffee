import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements, Route
} from "react-router-dom";
import HomePage, {
	HomePageLoader
} from "../pages/HomePage/HomePage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import IcedCoffeePage, {
	IcedCoffeePageLoader
} from "../pages/IcedCoffeePage/IcedCoffeePage.jsx";
import HotCoffeePage, {
	HotCoffeePageLoader
} from "../pages/HotCoffeePage/HotCoffeePage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import LayoutComponent from "../components/LayoutComponent/LayoutComponent.jsx";
import IcedCoffeeCardCreate, {
	createCoffeeCardAction
} from "../components/IcedCoffeeCardCreate/IcedCoffeeCardCreate.jsx";
import IcedCofeeCardUpdate, {updateCoffeeAction
} from "../components/IcedCofeeCardUpdate/IcedCofeeCardUpdate.jsx";
import IcedCoffeeCardPage, {
	IcedCoffeeCardPageLoader
} from "../pages/IcedCoffeePage/IcedCoffeeCardPage/IcedCoffeeCardPage.jsx";
import HotCoffeeCardPage, {
	HotCoffeeCardPageLoader
} from "../pages/HotCoffeePage/HotCoffeeCardPage/HotCoffeeCardPage.jsx";

import AuthHoc from "../hoc/AuthHoc/AuthHoc.jsx";
import ContactsPage from "../pages/ContactsPage/ContactsPage.jsx";
import TeamPage, {
	TeamPageLoader
} from "../pages/TeamPage/TeamPage.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";


export const router = createBrowserRouter(createRoutesFromElements(

	<Route
			path="/"
			element = {<LayoutComponent />} >
		<Route
			index
			element = {<HomePage />}
			loader={HomePageLoader}
			/>
		<Route path="login" element={<LoginPage />} />
		<Route path="registration" element={<RegisterPage />} />
		<Route
			path="about"
			element={<AboutPage />}
		>
				<Route
					path="contacts"
					element={<ContactsPage />}
					loader = {TeamPageLoader}
				/>
				<Route
					path="team"
					element={<TeamPage />}
					loader={TeamPageLoader}
				/>
		</Route>
		<Route
				path="iced-coffee"
				element={<AuthHoc><IcedCoffeePage /></AuthHoc>}
				loader={IcedCoffeePageLoader}
				errorElement={<ErrorPage />}
				/>
		<Route
				path = "iced-coffee/:id"
				element={<IcedCoffeeCardPage />}
				loader={IcedCoffeeCardPageLoader}
				errorElement={<ErrorPage />}
		/>
		<Route
				path="iced-coffee/:id/edit"
				element={<IcedCofeeCardUpdate />}
				loader = {IcedCoffeeCardPageLoader}
				action={updateCoffeeAction}
		/>
		<Route
				path="iced-coffee/create/:next"
				element={<IcedCoffeeCardCreate />}
				action={createCoffeeCardAction}
		/>
		<Route
				path="hot-coffee"
				element={<HotCoffeePage />}
				loader={HotCoffeePageLoader}
				errorElement={<ErrorPage />}
		/>
		<Route
				path = "hot-coffee/:id"
				element={<HotCoffeeCardPage />}
				loader={HotCoffeeCardPageLoader}
				errorElement={<ErrorPage />}
				/>
		<Route path="*" element={<NotFoundPage />} />
	</Route>
));