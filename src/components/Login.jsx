import React from 'react';

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <form method="dialog">
            {/* Close Button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-300 hover:text-white"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center mb-6">Login</h3>

          {/* Username */}
          <div className="mt-4 space-y-2">
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-pink-500 text-white font-semibold rounded-md px-6 py-2 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200">
              Login
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
