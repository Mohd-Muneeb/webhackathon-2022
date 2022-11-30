import Link from "next/link";
import React from "react";

const Card = (props: any) => {
	console.log(props);
	if (props.title === undefined) {
		return <></>;
	} else {
		return (
			<div className="p-6 rounded-xl bg-base-200 my-4 flex flex-col md:flex-row gap-8">
				<img src={props.image} alt="" className="rounded-xl max-h-80" />
				<div className="h-full flex flex-col my-4 gap-12">
					<div>
						<h1 className="text-2xl font-semibold text-[hsl(var(--p))]">{props.title}</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus perferendis
							quidem earum accusamus unde harum repudiandae? Qui consequatur facilis, assumenda,
							temporibus omnis quae at ipsum facere quidem illum incidunt.
						</p>
						<p className="text-[hsl(var(--s))]">Total downloads: {props.downloads}</p>
					</div>
					<div className="bottom-0 flex flex-col md:flex-row gap-4">
						<Link href={props.image} download>
							<button className="btn btn-primary">Download</button>
						</Link>
						<Link href={props.image} target="_blank" rel="noreferrer">
							<button className="btn btn-primary btn-outline">View Source</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
};

export default Card;
