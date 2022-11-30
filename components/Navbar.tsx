import React from "react";

const Navbar = () => {
	return (
		<div className="navbar rounded-2xl ml-[5vw] w-[90vw] bg-base-200 mt-4">
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
							<a>Homepage</a>
						</li>
						<li>
							<a>Portfolio</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
						<li>
							<a>About</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost normal-case text-xl">Wally</a>
			</div>
			<div className="navbar-end">
				<div className="avatar">
					<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src="https://placeimg.com/192/192/people" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
