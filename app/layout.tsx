import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Online Hotel Booking App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <SessionProvider session={session}>
          <NavBar />
          <main className="min-h-screen bg-gray-50">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
