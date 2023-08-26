import "@/styles/globals.scss";

import NavigationBar from "@/components/navigationBar";
import PageTransitionLayer from "@/components/pageTransitionLayer";
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
        <NavigationBar />
        <PageTransitionLayer>{children}</PageTransitionLayer>
      </body>
    </html>
  );
}