import React from "react";

const Hero = () => {
	return (
		<div className="hero min-h-[90vh]">
			<div className="hero-content flex-col gap-6 lg:flex-row-reverse">
				<img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
				<div>
					<h1 className="text-5xl font-bold">Share your wallpapers!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
						quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
