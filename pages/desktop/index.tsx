import React from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import Card from "../../components/Card";

const Desktop = () => {
	return (
		<div className="w-[90vw] ml-[5vw] mt-12">
			<div className="w-[80vw] ml-[5vw]">
				<Breadcrumb />
				{/* <div className="w-[70vw] ml-[5vw] h-full my-8 p-4 border-solid border-2 border-yellow-500 rounded-2xl bg-[hsl(var(--wa))] text-[hsl(var(--n))]">
					<h1>
						</h1>Some warning here
				</div> */}
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Desktop;
