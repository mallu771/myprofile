

  import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export const metadata = {
  title: "Mallikarjun | Frontend Developer",
  description:
    "React.js and Next.js Developer Portfolio",

  keywords: [
    "React",
    "Next.js",
    "Frontend",
    "Portfolio"
  ],

  openGraph: {
    title: "Mallikarjun Portfolio",
    description: "Frontend Developer",
    images: ["/preview.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}