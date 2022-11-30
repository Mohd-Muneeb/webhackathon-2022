import React, { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import Card from "../../components/Card";
import { collection, query, getDocs } from "firebase/firestore";
import Loading from "../../components/Loading";
import { db } from "../../db/firebase";

const Desktop = (props: any) => {
	const [Wallpapers, setWallpapers] = useState([{}]);
	let key = 0;
	const [firstLoad, setfirstLoad] = useState(false);
	useEffect(() => {
		if (!firstLoad) {
			setfirstLoad(true);
		} else {
			const getPosts = async () => {
				const q = query(collection(db, "desktop"));

				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					setWallpapers((prev) => [...prev, doc.data()]);
				});
			};
			getPosts();
		}
	}, [firstLoad]);

	if (props.loading) {
		return <Loading />;
	} else {
		if (props.user) {
			return (
				<div className="w-[90vw] ml-[5vw] mt-12">
					<div className="w-[80vw] ml-[5vw]">
						<Breadcrumb />
						{Wallpapers.map((elem: any) => {
							console.log(elem);
							return <Card downloads={elem.downloads} title={elem.title} image={elem.image} key={elem.title} />
						})}
					</div>
				</div>
			);
		} else {
			window.location.href = "/login";
		}
	}
};

export default Desktop;
