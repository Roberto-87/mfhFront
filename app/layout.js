import "../styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Maria Ferrari Hardoy- Artista Visual</title>
      </head>
      <body>{children}</body>
    </html>
  );
}