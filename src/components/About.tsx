import { Button, ButtonGroup } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Github } from "lucide-react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <>
      <div
        className="mx-auto flex max-w-screen-lg flex-col items-center justify-center space-y-4 p-5 pt-7"
        id="about">
        <Image
          src="/myPic.jpg"
          height={180}
          width={180}
          radius="full"
          className="border-2 border-background object-cover"
        />
        <div className="text-center text-2xl">
          <div className="">
            Hi, I am <span className="font-semibold">Ranjana</span>
          </div>
          <div className="font-semibold text-blue-500">
            <Typewriter
              words={[
                " Frontend Developer",
                " Fullstack Developer",
                " Programmar",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
        <div className="font-thin sm:w-[500px]">
          Passionate in building highly interactive, beautiful Web application
          that bring your idea to life and push your current business to the
          next level.
        </div>

        <div className="">
          <Link href={"https://github.com/RanjanaRK"}>
            <Github />
          </Link>
        </div>

        <Button
          color="primary"
          radius="sm"
          size="md">
          <Link href={"mailto:ranjana252000@gmail.com"}>Hire Me</Link>
        </Button>
      </div>
    </>
  );
};

export default About;
