"use client";
import HeaderSection from "../../components/organisms/header-section";
import Image from "next/image";
import { Label } from "../../components/ui/label";
import { ChevronRight } from "lucide-react";

export default function Accomodation() {
  const data = [
    {
      image: "/assets/images/accomodation-1.png",
      title: "Equarius Villa",
      desc: "Enjoy a relaxing staycation with us.",
    },
    {
      image: "/assets/images/accomodation-2.png",
      title: "Johny Walker Hotel",
      desc: "Indulge in a variety of dining options.",
    },
    {
      image: "/assets/images/accomodation-3.png",
      title: "Crockfords Villa",
      desc: "Explore the city's top attractions.",
    },
  ];

  return (
    <div className="mx-auto px-5 md:px-20">
      <HeaderSection
        title="Accommodation Play Your Way"
        desc="Select from an array of staycation, dining and attraction promotions."
        actionLabel="View All Accomodation"
      />
      <div className="w-full flex">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 overflow-hidden">
          {data.map((item, index) => (
            <div key={index} className="w-full">
              <div className="w-full overflow-hidden flex flex-col gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="object-cover rounded-none"
                />
                <Label className="text-lg">{item.title}</Label>
                <Label className="flex items-center text-sm text-orange-300">
                  Explore More{" "}
                  <span>
                    <ChevronRight size={16} />
                  </span>
                </Label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
