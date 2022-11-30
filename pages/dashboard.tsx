import React from "react";
import Loading from "../components/Loading";
import MainCard from "../components/MainCard";

const Dashboard = (props: any) => {
	if (props.loading) {
		return <Loading />;
	} else {
		if (!props.user) {
			window.location.href = "/login";
		} else {
			return (
				<div className="min-h-[90vh] p-12 md:p-16 ">
					<div className="text-center w-[80vw] md:ml-[5vw] p-16 rounded-2xl from-[hsl(var(--p))] to-[hsl(var(--s))] bg-gradient-to-tr">
						<h1 className="font-semibold text-3xl cursive mb-8 text-[hsl(var(--nf))]">
							Choose in between the wide array of wallpapers we have!
						</h1>
						<h1 className="text-[hsl(var(--n))] text-lg">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima consectetur quo incidunt
							molestias exercitationem provident saepe dolorum voluptatibus, tempora quas reprehenderit
							eos sunt voluptatem cumque nihil soluta, consequatur atque reiciendis.
						</h1>
					</div>
					<div className="p-12 w-full bg-base-200 mt-12 rounded-3xl">
						<div className="px-12 text-center mb-8">
							<h1 className="text-3xl my-4 font-semibold text-[hsl(var(--pf))]">Choose your device</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero praesentium
								placeat, odit recusandae vero dolores? Dolorem labore at repellendus, a facere quo
								magni, eaque repudiandae molestias, eius autem amet!
							</p>
						</div>
						<div className=" justify-around items-center flex flex-col md:flex-row">
							<MainCard type={"Desktop"} />
							<MainCard type={"Mobile"} />
						</div>
					</div>
				</div>
			);
		}
	}
};

export default Dashboard;
