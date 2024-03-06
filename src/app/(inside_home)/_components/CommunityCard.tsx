import * as React from "react";

import { CommunityData } from "@/data/CommunityfakeData";
import { Card, CardContent } from "@/components/ui/card";
import RoundedReplyPlaceholder from "./Comments";
import Image from "next/image";

export function CardWithForm() {
  return (
    <div className="flex justify-center items-center max-md:w-full h-full w-3/4 ">
      <Card className="w-full bg-secondary">
        <CardContent className="mt-2 mb-8">
          {CommunityData.map((data, index) => (
            <div key={data.id} className={index !== 0 ? "mt-4" : ""}>
              <div className="flex items-center space-x-4">
                <Image src={data.avatar} width={50} height={50} className="rounded-full" alt="avatar"/>
                <div>
                  <p className="text-base text-heading font-semibold">{data.userName}</p>
                  <p className="text-xs text-subheading">{data.date} {data.time}</p>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-base text-primary font-semibold">{data.title}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-subheading">{data.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <RoundedReplyPlaceholder />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
