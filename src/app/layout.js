import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "View weather information for different cities",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </>
  );
}
