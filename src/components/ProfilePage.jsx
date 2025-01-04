import React, { useState } from "react";

const ProfilePage = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="text-center">
          <div className="relative">
            <img
              src={
                profilePhoto ||
                "https://via.placeholder.com/150?text=Profile+Photo"
              }
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <label htmlFor="photo-upload" className="absolute bottom-0 right-6">
              <input
                type="file"
                id="photo-upload"
                className="hidden"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
              <div className="bg-blue-500 text-white px-2 py-1 rounded-full cursor-pointer hover:bg-blue-600">
                Upload
              </div>
            </label>
          </div>
        </div>

        <form className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm">Email ID</label>
              <input
                type="email"
                placeholder="Enter your email ID"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm">Gender</label>
              <select
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600"
            >
              Update Profile
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 rounded text-white hover:bg-red-600"
            >
              Log Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
