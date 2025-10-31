"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MyProfilePage() {
  const { data: session, status } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    image: "",
    role: "",
  });

  // Fetch user data from DB
  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/users/${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setProfileData({
            name: data.name,
            email: data.email,
            image: data.image,
            role: data.role,
          });
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        name: profileData.name,
        image: imagePreview || profileData.image,
      };

      const res = await fetch("/api/users/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: profileData.email,
          updatedData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Error updating profile!");
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading profile data...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Profile Details</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300 ${
            isEditing
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-[#04b1ac] hover:bg-[#027874] text-white"
          }`}
        >
          {isEditing ? "Cancel Edit" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Picture Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={imagePreview || profileData.image || "/avatar.jpg"}
          width={100}
          height={100}
          className="border-4 border-[#04b1ac] shadow-md object-cover"
          alt="User Avatar"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4 text-sm text-gray-500"
          />
        )}
        <h3 className="mt-4 text-xl font-semibold text-gray-900">
          {profileData.name}
        </h3>
        <p className="text-gray-500 text-sm">{profileData.email}</p>
        <p className="text-gray-500 text-sm">{profileData.role}</p>
      </div>

      {/* Profile Data Form */}
      <form onSubmit={handleSave}>
        <div className="space-y-6">
          <ProfileField
            label="Full Name"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            isEditing={isEditing}
          />
        </div>

        {isEditing && (
          <div className="mt-8 pt-4 border-t">
            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-semibold rounded-lg transition duration-300 bg-[#027874] text-white hover:bg-[#04b1ac] shadow-lg"
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default MyProfilePage;

const ProfileField = ({
  label,
  name,
  value,
  onChange,
  isEditing,
  type = "text",
}) => (
  <div className="border p-4 rounded-lg bg-gray-50">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    {isEditing ? (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#04b1ac] focus:border-[#04b1ac] transition"
        required
      />
    ) : (
      <p className="text-gray-700 font-medium">{value}</p>
    )}
  </div>
);
