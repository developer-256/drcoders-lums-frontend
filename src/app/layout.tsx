import type { Metadata } from "next";
import "./globals.css";
import { getSession } from "@/auth";
import { Poppins, Quicksand } from "next/font/google";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import ResponsiveTester from "@/lib/ResponsiveTester";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  // preload: true,
  weight: ["300", "400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  // preload: true,
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Buy for Me",
  description: "Anything Anywhere All At Once",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body
        className={cn(
          "text-foreground antialiased",
          poppins.variable,
          quicksand.variable,
        )}
      >
        <Providers session={session}>{children}</Providers>
        {/* <ResponsiveTester /> */}

        <Toaster
          richColors
          toastOptions={{
            classNames: { loading: "bg-[#001f0f] text-blue-400" },
          }}
        />
      </body>
    </html>
  );
}
