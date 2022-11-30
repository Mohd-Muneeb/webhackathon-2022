import React, { useState } from "react";
import Loading from "../components/Loading";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../auth";
import Link from "next/link";

const Login = (props: any) => {
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");

	const Submit = (e: any) => {
		signInWithEmailAndPassword(auth, Email, Password).catch((error) => {
			const errorCode = error.code;

			const errorMessage = error.message;
			alert(`Error occured ${error.message} and ${Email} and ${Password}`);
		});
	};

	const handleEmail = (e: any) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e: any) => {
		setPassword(e.target.value);
	};

	if (props.loading) {
		return <Loading />;
	} else {
		if (props.user) {
			window.location.href = "/dashboard";
		} else {
			return (
				<div className="hero min-h-[90vh] mt-8 md:mt-0 bg-base-100">
					<div className="hero-content flex-col gap-8 md:gap-16 lg:flex-row-reverse">
						<div className="text-center lg:text-left">
							<h1 className="text-5xl font-bold">Login now!</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
								exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor
								sit amet consectetur, adipisicing elit. Nam provident veniam tempora exercitationem sit
								cupiditate atque pariatur neque facere harum sint amet earum numquam iste corporis quod,
								et deserunt vitae!
							</p>
						</div>
						<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
							<div className="card-body">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="text"
										placeholder="email"
										onChange={(e) => handleEmail(e)}
										className="input input-bordered"
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input
										type="password"
										placeholder="password"
										onChange={(e) => handlePassword(e)}
										className="input input-bordered"
									/>
									<label className="label">
										{" "}
										Don&apos;t have an account
										<Link href="/signup" className="label-text-alt link link-hover">
											Sign Up?
										</Link>
									</label>
								</div>
								<div className="form-control mt-6">
									<button className="btn btn-primary" onClick={(e) => Submit(e)}>
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
};

export default Login;
