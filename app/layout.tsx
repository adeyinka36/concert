import "./globals.css";

export const metadata = {
  title: "Element Concert",
  description: "Concert and events landing page"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

