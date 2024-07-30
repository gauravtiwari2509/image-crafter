
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/nextjs";
import SignOutHomePage from "@/components/SignOutHomePage";

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Image-Crafter",
  description: "AI generated image editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#624cf5" } }}>
      <html lang="en">
        <body
          className={cn("font-IBM_Plex_Sans antialiased", IBM_Plex.variable)}
        >
          <ClerkLoading>
            <p>loading the content...</p>
          </ClerkLoading>
          <ClerkLoaded>
          <SignedOut>
            <SignOutHomePage />
          </SignedOut>
          
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
