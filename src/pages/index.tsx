import About from "@/components/About";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className="space-y-4">
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default index;