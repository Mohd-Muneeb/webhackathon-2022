import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Breadcrumb = () => {
	const router = useRouter();
	const crumbs = router.asPath.split("/").slice(1);

	return (
		<div className="text-sm breadcrumbs">
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				{crumbs.map((elem) => (
					<li key={elem}>
						<a href={elem} className="capitalize">
							{elem}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
