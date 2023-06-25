import { Suspense } from "react";
import loading from "@/app/loading";
import "./globals.css";

export const metadata = {
  title: "NetGrid || Home",
  description: "NetGrid - React Portfolio Template",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
