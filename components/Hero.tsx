import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div className="hero min-h-[90vh]">
			<div className="hero-content flex-col gap-8 md:gap-12 text-center md:text-left lg:flex-row-reverse">
				<img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
				<div>
					<h1 className="text-5xl font-bold ">Share and download wallpapers!</h1>
					<p className="py-6">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis neque quam aut debitis ea
						provident laboriosam culpa consectetur iste maiores ullam repellendus, commodi perspiciatis
						repellat! Mollitia consequuntur beatae corporis dolorum.
					</p>
					<Link href="/login">
						<button className="btn btn-primary">Get Started</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
