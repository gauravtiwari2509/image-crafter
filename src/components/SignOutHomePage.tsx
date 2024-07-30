// components/SignOutHomePage.tsx
"use client"; // Ensure this component is treated as a client component

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
    <>
      <div className="flex w-full justify-center h-[10vh] items-center gap-2 overflow-hidden">
        <Button onClick={handleSignInClick} className="bg-blue-500">Sign In</Button>
        <Button onClick={handleSignUpClick} className="bg-blue-500">Sign Up</Button>
      </div>
    </>
  );
}
