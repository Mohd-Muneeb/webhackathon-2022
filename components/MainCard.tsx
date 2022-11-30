import React from "react";

const MainCard = (props: any) => {
	// style={background-image: src("https://placeimg.com/400/225/arch")}
	return (
		<div className="card w-96 flex flex-col justify-center m-4 items-center bg-base-100 h-full shadow-xl ">
			<div className="rounded-xl m-4 mt-8">
				<img src="https://placeimg.com/400/300/arch" alt="" className="rounded-xl" />
			</div>
			<div className="text-center mb-4">
				<h1 className="text-2xl text-[hsl(var(--p))] font-semibold">{props.type}</h1>
				<div className="mt-4">
					{props.type === "Desktop"
						? "wallpapers for the huge screens we all love!"
						: "Wallpapers to carry everywhere!"}
					<p>Aspect ratio</p>
				</div>
			</div>
			{props.type == "Desktop" ? (
				<a href="/desktop">
					<button className="btn mb-8 btn-primary">View more</button>
				</a>
			) : (
				<a href="/mobile">
					<button className="btn mb-8 btn-primary">View more</button>
				</a>
			)}
		</div>
	);
};
export default MainCard;
