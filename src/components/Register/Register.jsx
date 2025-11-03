import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc"; // Google icon

const Register = () => {
    // sign in with google
  const { signInWithGoogle } = use(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        // Save user to database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("User saved:", data));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="label text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <div className="text-right">
            <a className="link link-hover text-sm text-blue-600">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-neutral w-full">
            Register
          </button>
        </form>

        <div className="divider text-gray-400 my-5">or</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a className="text-blue-600 link-hover">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
