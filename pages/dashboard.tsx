import React from "react";
import Loading from "../components/Loading";

const Dashboard = (props: any) => {
	if (props.loading) {
		return <Loading />;
	} else {
		if (!props.user) {
			window.location.href = "/login";
		} else {
			return <div className="">dashboard</div>;
		}
	}
};

export default Dashboard;
