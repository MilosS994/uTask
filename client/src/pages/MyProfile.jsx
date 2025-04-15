import React, { useState } from "react";
import useAuthStore from "../store/authStore.js";
import apiClient from "../services/api.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MyProfile = () => {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  const [name, setName] = useState(user?.name || "");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (!password.trim() && name.trim() === user?.name) {
      setError("You haven't made any changes!");
      return;
    }

    try {
      const response = await apiClient.patch("/users/me", {
        name,
        password: password || undefined,
      });

      updateUser(response.data.user);
      setSuccess(true);
      setPassword("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Error occurred while updating profile!"
      );
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{user.name}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Email (cannot be changed)
          </label>
          <Input
            type="email"
            value={user?.email || ""}
            readOnly
            className="bg-gray-200 text-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Name
          </label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-700 font-semibold">{error}</p>}
        {success && (
          <p className="text-green-700 font-semibold">
            Profile updated successfully!
          </p>
        )}

        <div className="flex justify-center">
          <Button type="submit" className="w-[100%] max-w-lg cursor-pointer">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
