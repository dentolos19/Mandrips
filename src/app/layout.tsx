import "@/styles/core.scss";

import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Mandrips",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}