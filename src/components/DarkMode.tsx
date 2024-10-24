import { darkAtom } from "@/utils/atoms/darkAtom";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import { MoonIcon, MoonStar, SunIcon } from "lucide-react";
import { useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useAtom(darkAtom);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <div className="">
        <Button
          isIconOnly
          variant="light"
          onPress={() => setDarkMode(!darkMode)}>
          {darkMode ? <MoonStar fill="yellow" /> : <SunIcon fill="#0000ff" />}
        </Button>
      </div>
    </>
  );
};

export default DarkMode;
