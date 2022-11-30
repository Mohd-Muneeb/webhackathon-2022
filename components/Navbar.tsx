import Link from "next/link";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import auth from "../auth";

const Navbar = () => {
	const Logout = (e: any) => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				alert(error.message);
			});
	};

	return (
		<div className="navbar rounded-2xl w-[90vw] ml-[5vw] bg-base-200 mt-4">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/">Homepage</Link>
						</li>
						<li>
							<Link href="https://www.mohdmuneeb.live" target="_blank" rel="noreferrer">
								Portfolio
							</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<Link className="btn btn-ghost normal-case text-xl" href="/">
					Wally
				</Link>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<button disabled>Profile</button>
						</li>
						<li>
							<button disabled>Settings</button>
						</li>
						<li>
							<button onClick={(e) => Logout(e)}>Logout</button>
						</li>
					</ul>
				</div>
			</div>{" "}
		</div>
	);
};

export default Navbar;
