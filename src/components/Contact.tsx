import { Card, CardBody } from "@nextui-org/card";
import { ChartArea } from "lucide-react";
import Link from "next/link";

const Contact = () => {
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
          <Card className="p-10">
            <CardBody className="space-y-4">
              <div className="text-center text-3xl">Get in touch</div>
              <div className="flex flex-col text-xl font-bold">
                <Link href={"mailto:ranjana252000@gmail.com"}>
                  <span> Email: </span>
                  Ranjana252000@gmail.com
                </Link>

                <Link href="tel:+9088810550">Phone no: 9088810550</Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;
