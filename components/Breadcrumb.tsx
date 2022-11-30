import { useRouter } from "next/router";
import React from "react";

export const Breadcrumb = () => {
	const router = useRouter();
	const crumbs = router.asPath.split("/").slice(1);

	return (
		<div className="text-sm breadcrumbs">
			<ul>
				<li>
					<a>Home</a>
				</li>
				{crumbs.map((elem) => (
					<li key={elem}>
						<a href={elem} className="capitalize">{elem}</a>
					</li>
				))}
			</ul>
		</div>
	);
};
