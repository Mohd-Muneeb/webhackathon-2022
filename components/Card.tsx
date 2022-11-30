import React from "react";

const Card = () => {
	return (
		<div className="p-6 rounded-xl bg-base-200 my-4 flex flex-col md:flex-row gap-8">
			<img src="https://placeimg.com/400/225/arch" alt="" className="rounded-xl" />
			<div className="h-full flex flex-col my-4 gap-12">
				<div>
					<h1 className="text-2xl font-semibold text-[hsl(var(--p))]">Title</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus perferendis quidem
						earum accusamus unde harum repudiandae? Qui consequatur facilis, assumenda, temporibus omnis
						quae at ipsum facere quidem illum incidunt.
					</p>
					<p className="text-[hsl(var(--s))]">Total downloads: </p>
				</div>
				<div className="bottom-0 flex flex-col md:flex-row gap-4">
					<a href="https://placeimg.com/400/225/arch" download>
						<button className="btn btn-primary">Download</button>
					</a>
					<a href="https://placeimg.com/400/225/arch" target="_blank" rel="noreferrer">
						<button className="btn btn-primary btn-outline">View Source</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
