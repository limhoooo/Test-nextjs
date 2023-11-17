import React, { useEffect } from "react";
import Header from "./Header";
import { Space_Grotesk } from "next/font/google";
const inter = Space_Grotesk({ subsets: ["latin"] });
import Head from "next/head";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:title" content="크림" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <main className={inter.className}>{children}</main>
    </div>
  );
}
