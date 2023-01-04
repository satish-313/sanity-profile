import Head from "next/head";
import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>profile</title>
        <meta name="description" content="my profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-3xl">Hello world</h1>
      </div>
    </>
  );
}
