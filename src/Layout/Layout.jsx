import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";

const Layout = () => {
	const navigate = useNavigate()

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem('auth_data'))

		

		if(!data) {
			navigate('/sign')
		}
	}, [])


	return (
		<div className="w-[100%] flex h-[100vh]">
			<Aside />
			<div className="w-[79.1%] mx-auto overflow-x-scroll">
				<Header />
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
