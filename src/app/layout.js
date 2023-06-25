import "./globals.css";

export const metadata = {
  title: "NetGrid || Home",
  description: "NetGrid - React Portfolio Template",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
