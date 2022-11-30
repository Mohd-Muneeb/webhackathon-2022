import React from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const Mobile = (props: any) => {
	if (props.loading) {
		return <Loading />;
	} else {
		if (props.user) {
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
		} else {
			window.location.href = "/login";
		}
	}
};

export default Mobile;
