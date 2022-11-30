import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../auth";
import { Breadcrumb } from "../components/Breadcrumb";

const SignUp = () => {
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [Retype, setRetype] = useState("");

	const Submit = (e: any) => {
		if (Password == Retype) {
			createUserWithEmailAndPassword(auth, Email, Password)
				.then((userCredential) => {
					// Signed in
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorMessage);
					// ..
				});
		}
        else{
            alert("The passwords are not similar!");
        }
	};
	return (
		<div className="w-[90vw] ml-[5vw] min-h-[80vh] my-8">
			<Breadcrumb />{" "}
			<div className="flex flex-col justify-center items-center gap-8 rounded-lg mt-12">
				<h1 className="text-xl font-semibold">Sign up with us today and join our community!</h1>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">What is your email?</span>
					</label>
					<input
						type="text"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">What is your password?</span>
					</label>
					<input
						type="password"
						name=""
						id=""
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Retype the password?</span>
					</label>
					<input
						type="password"
						name=""
						id=""
						placeholder="Retype password"
						className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setRetype(e.target.value)}
					/>
				</div>
				<div>
					<button className="btn btn-primary">Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
