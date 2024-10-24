import { Image } from "@nextui-org/image";
import skills from "../utils/skills.json";
import { darkAtom } from "@/utils/atoms/darkAtom";
import { useAtom } from "jotai";
// import Darkmode from "./Darkmode";

const Skills = () => {
  const [darkMode, setDarkMode] = useAtom(darkAtom);
  return (
    <>
      <div
        className="mx-auto max-w-screen-lg space-y-4 p-5"
        id="skills">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-4xl">Skills</div>
          <div className="h-1 w-8 rounded-lg bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-3 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((item) => (
            <div
              key={item.id}
              className={`after:bg-background/40 flex h-28 w-28 flex-col items-center justify-center rounded-full shadow-lg backdrop-blur-lg after:absolute after:inset-0 after:z-[-1] after:rounded-full after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0 ${darkMode ? "shadow-white/10" : ""} bg-opacity-5`}>
              <Image
                src={`${item.logo}`}
                height={60}
                width={60}
              />
              <div className="text-sm font-thin">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
