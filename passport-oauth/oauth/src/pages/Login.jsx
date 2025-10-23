import React from "react";

export function Login() {
  const socialBtn = "flex items-center gap-3 text-white rounded-md py-2 px-4 transition";
  const google = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:3000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:3000/auth/facebook", "_self");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-50px)] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl h-[500px] p-8 flex flex-col items-center">
        
        <h1 className="text-2xl font-semibold text-gray-400 mb-8 text-center">
          Choose a Login Method
        </h1>

        <div className="flex w-full max-w-3xl flex-1 items-center">
          
          <div className="flex flex-col gap-4 flex-1">
            <button className={`${socialBtn} bg-red-600 hover:bg-red-700`} onClick={google}>
              <img src="google.png" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className={`${socialBtn} bg-blue-600 hover:bg-blue-700`} onClick={facebook}>
              <img src="facebook.png" alt="Facebook" className="w-5 h-5" />
              Facebook
            </button>
            <button className={`${socialBtn} bg-black hover:bg-gray-900`} onClick={github}>
              <img src="image.png" alt="Github" className="w-5 h-5 invert" />
              Github
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mx-6 h-full">
            <div className="w-px flex-1 bg-gray-300"></div>
            <span className="my-2 bg-white px-3 py-1 rounded-full border border-gray-300 text-sm text-gray-500">
              OR
            </span>
            <div className="w-px flex-1 bg-gray-300"></div>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white rounded-md py-2 hover:bg-purple-700 transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
