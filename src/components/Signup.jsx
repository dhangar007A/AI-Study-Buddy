import React from 'react';

function Signup() {
  return (
    <div>
      <dialog id="signup_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* Close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Signup</h3>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/* First Name */}
          <div className="mt-4 space-y-2">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/* Last Name */}
          <div className="mt-4 space-y-2">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/* Username */}
          <div className="mt-4 space-y-2">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/* Confirm Password */}
          <div className="mt-4 space-y-2">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/* Signup Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200">
              Signup
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
