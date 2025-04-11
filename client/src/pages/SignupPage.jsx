// Shadcn UI components for the signup page
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

// Assets
import assets from "../assets/assets.js";

// React and React Router
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Zustand store for authentication
import useAuthStore from "../store/authStore.js";

// Page
const SignupPage = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  const signup = useAuthStore((state) => state.signup);
  const isAuthLoading = useAuthStore((state) => state.isLoading);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    try {
      await signup({ email, password, name });
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup page error:", error);
      setErrorMessage(
        error.message || "An unexpected error occurred during sign up."
      );
    }
  };

  return (
    <div className="relative min-w-[100vw] min-h-[100vh] flex items-center justify-center md:justify-between md:px-10 lg:px-14">
      <Card className="w-full h-[60vh] shadow-xl flex justify-center md:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800 font-bold md:text-2xl lg:text-3xl xl:text-4xl">
            Create an account
          </CardTitle>
          <CardDescription className="text-gray-600 font-light lg:text-lg">
            Enter your details and start tracking your daily tasks!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            {/* Error message display */}
            {errorMessage && (
              <p className="text-sm text-red-700">{errorMessage}</p>
            )}
            <Button
              variant="outline"
              className="w-full cursor-pointer hover:bg-[#dbe8ec] transition-all duration-300 ease-in-out"
              type="submit"
              disabled={isAuthLoading}
            >
              {isAuthLoading ? "Signing up..." : "Sign up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="mt-4">
          <p>
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#79a9b9] font-semibold hover:text-[#5d8693]"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
      <div className="absolute top-2 right-4 md:relative md:flex-1/2 md:flex md:justify-center md:items-center">
        <div className="border-blue-100 border-3 p-2 rounded-full md:border-6 md:p-6">
          <img
            src={assets.logo}
            alt="logo"
            className="w-20 h-20 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-64 xl:h-64 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
