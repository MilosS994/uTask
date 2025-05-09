import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import assets from "../assets/assets.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore.js";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signup = useAuthStore((state) => state.signup);
  const isAuthLoading = useAuthStore((state) => state.isLoading);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) return setErrorMessage("Name is required.");
    if (!email.trim()) return setErrorMessage("Email is required.");
    if (!password) return setErrorMessage("Password is required.");
    if (!/\S+@\S+\.\S+/.test(email))
      return setErrorMessage("Enter a valid email address.");
    if (password.length < 8)
      return setErrorMessage("Password must be at least 8 characters.");

    try {
      await signup({ email, password, name });
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen items-center justify-center bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-500 px-4">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Card className="w-full max-w-md shadow-lg rounded-2xl p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">
              Create your account
            </CardTitle>
            <CardDescription className="text-gray-500 mt-1">
              Sign up and start managing your tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl"
              />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl"
              />
              <Input
                type="password"
                placeholder="Password (min. 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl"
              />
              {errorMessage && (
                <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}
              <Button
                type="submit"
                className="w-full rounded-xl bg-[#79a9b9] hover:bg-[#5d8693] transition duration-200 text-white cursor-pointer"
                disabled={isAuthLoading}
              >
                {isAuthLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm mt-2">
            Already have an account?&nbsp;
            <Link
              to="/signin"
              className="text-[#79a9b9] font-medium hover:text-[#5d8693]"
            >
              Sign in
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Right - Logo */}
      <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center">
        <img
          src={assets.logo}
          alt="App logo"
          className="w-36 h-36 md:w-56 md:h-56 xl:w-72 xl:h-72 animate-pulse"
        />
      </div>
    </div>
  );
};

export default SignupPage;
