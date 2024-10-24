import { Card, CardBody } from "@nextui-org/card";
import { ChartArea } from "lucide-react";
import Link from "next/link";
import { darkAtom } from "@/utils/atoms/darkAtom";
import { useAtom } from "jotai";

const Contact = () => {
  const [darkMode, setDarkMode] = useAtom(darkAtom);
  return (
    <>
      <div
        className="mx-auto max-w-screen-lg space-y-4 p-5"
        id="contact">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-4xl">Contact</div>
          <div className="h-1 w-14 rounded-lg bg-blue-500"></div>
        </div>
        <div className="flex items-center justify-center">
          <Card
            className={`p-10 shadow-lg ${darkMode ? "bg-white/10 shadow-white/10" : "bg-black/10"}`}>
            <CardBody className="space-y-4">
              <div className="text-center text-3xl">Get in touch</div>
              <div className="flex flex-col text-xl font-bold">
                <Link href={"mailto:ranjana252000@gmail.com"}>
                  <span> Email: </span>
                  Ranjana252000@gmail.com
                </Link>

                <Link href="tel:+7044681389">Phone no: 7044681389</Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;
