import React from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import Card from "../../components/Card";

const Mobile = () => {
	return (
		<div className="w-[90vw] ml-[5vw] mt-12">
			<div className="w-[80vw] ml-[5vw]">
				<Breadcrumb />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Mobile;
