import { Suspense } from "react";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
