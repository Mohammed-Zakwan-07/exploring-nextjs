import "../Styles/global.css";
import Link from "next/link";
export const metadata = {
  title: "My Cool Site",
  description: "Learning Next.js like a boss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Typing</Link>
          <Link href="/Timer">/timer</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
