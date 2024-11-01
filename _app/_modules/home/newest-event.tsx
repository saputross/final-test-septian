"use client";

import HeaderSection from "../../components/organisms/header-section";
import { Card } from "../../components/ui/card";
import Image from "next/image";
import { Label } from "../../components/ui/label";
import { ChevronRight } from "lucide-react";

export default function NewestEvent() {
  return (
    <div className="mx-auto px-5 md:px-20">
      <HeaderSection
        title="Newest Happening"
        desc="From the latest dining destination to exhilarating events, there’s always a new moment to discover."
        actionLabel="View All Events"
      />
      <div className="w-full md:flex mt-10">
        <Card className="rounded-3xl overflow-hidden md:flex w-full justify-evenly gap-5 items-center shrink-0">
          <Image
            src="/assets/images/newest-event.png"
            alt="newest event"
            width={100}
            height={100}
            layout="responsive"
            className="rounded-none"
          />
          <div className="gap-y-4 flex flex-col px-16 py-5 h-full justify-center">
            <Label className="text-2xl">
              Pertamina Grand Prix of Indonesia
            </Label>
            <Label className="text-sm text-slate-500 text-ellipsis break-words">
              The Asia Road Racing Championship is the only regional level
              motorcycle racing series in Asia. It representant the next step
              for riders graduating from their respective national championships{" "}
            </Label>
            <Label className="flex items-center text-sm text-orange-300 mt-10">
              Explore More{" "}
              <span>
                <ChevronRight size={16}/>
              </span>
            </Label>
          </div>
        </Card>
      </div>
    </div>
  );
}
