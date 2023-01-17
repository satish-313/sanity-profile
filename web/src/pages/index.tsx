import Head from "next/head";
import { About, Header, Hero, WorkExpirence } from "../components";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>profile</title>
        <meta name="description" content="my profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      
      <section id="experience" className="snap-center">
        <WorkExpirence />
      </section>
    </div>
  );
}
