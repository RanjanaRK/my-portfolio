import { Image } from "@nextui-org/image";
import projects from "../utils/projects.json";
import Link from "next/link";
import { ExternalLink, Share } from "lucide-react";
import { Card, CardBody } from "@nextui-org/card";

const Projects = () => {
  return (
    <>
      <div
        className="mx-auto max-w-screen-lg space-y-4 p-5"
        id="projects">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-4xl">Projects</div>
          <div className="h-1 w-14 rounded-lg bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 sm:gap-12">
          {projects.map((item) => (
            <Card
              isHoverable={true}
              className="sm:w-[330px] md:w-[420px]"
              key={item.id}>
              <CardBody className="space-y-3">
                <Image
                  src={item.screenshot}
                  className="object-cover"
                />
                <div className="">
                  <div className="text-xl font-bold">{item.name}</div>
                  <div className="">{item.description}</div>
                  <Link
                    href={item.respository_link}
                    className="flex gap-2 text-blue-500 hover:underline">
                    Source Code
                    <ExternalLink size={22} />
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
