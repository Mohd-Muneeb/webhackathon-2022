import React from "react";
import Footer from "./Footer";

const Loading = () => {
	return (
		<>
			<div className=" h-[80vh] flex flex-col gap-8 justify-center items-center">
				<h1>Please wait while we fetch your Auth Data</h1>
				<progress className="progress bg-base-200 flex justify-center items-center w-56"></progress>
			</div>
			<Footer />
		</>
	);
};

export default Loading;
