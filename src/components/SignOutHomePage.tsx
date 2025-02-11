"use client"; 

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function SignOutHomePage() {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/sign-in");
  };

  const handleSignUpClick = () => {
    router.push("/sign-up");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Transform Your Creativity with Powerful Image Editing Tools
        </h1>
        <p className="text-lg mb-8">
          Unlock your creative potential with our easy-to-use and feature-rich
          image editing platform. Whether you're a professional or a beginner,
          we've got you covered.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            onClick={handleSignInClick}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </Button>
          <Button
            onClick={handleSignUpClick}
            className="bg-pink-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
          >
            Sign Up
          </Button>
        </div>
      </div>

      <footer className="absolute bottom-4 text-center text-sm text-white opacity-70">
        <p>© 2025 image-crafter. All rights reserved.</p>
      </footer>
    </div>
  );
}
