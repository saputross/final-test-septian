"use client";

import { Card } from "@/root/_app/components/ui/card";
import { Input } from "@/root/_app/components/ui/input";
import { Label } from "@/root/_app/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/root/_app/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="lg:relative w-full md:flex">
      <Image
        src="/assets/images/hero-banner.png"
        width={100}
        height={100}
        className="object-cover"
        layout="responsive"
        alt="hero banner"
      />
      <div className="lg:h-[120px] w-full lg:absolute lg:-bottom-12 flex flex-col items-center justify-center">
        <Card className="w-10/12 bg-white rounded-md flex max-md:flex-col items-center justify-between p-4 gap-3">
          <div className="p-2 border-[1px] w-full bg-white border-slate-300 rounded-lg ring-offset-background focus-within:ring-1 focus-within:ring-ring">
            <p className="text-xs">BOOKING TYPE</p>
            <Select>
              <SelectTrigger className="px-0 border-none focus-visible:outline-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:border-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 ">
                <SelectValue placeholder="Select Booking Type">Hotel</SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border-[1px] border-none focus-visible:outline-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:border-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0  ">
                <SelectItem value="hotel">Hotel</SelectItem>
                <SelectItem value="Event">Event</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-2 border-[1px] w-full bg-white border-slate-300 rounded-lg ring-offset-background focus-within:ring-1 focus-within:ring-ring">
            <p className="text-xs">ATTRACTIONS</p>
            <Select>
              <SelectTrigger className="px-0 border-none focus-visible:outline-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:border-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 ">
                <SelectValue placeholder="Select Attractions">
                  Concert
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border-[1px] border-none focus-visible:outline-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:border-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0  ">
                <SelectItem value="hotel">Concert</SelectItem>
                <SelectItem value="Event">Dance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-2 border-[1px] w-full bg-white border-slate-300 rounded-lg ring-offset-background focus-within:ring-1 focus-within:ring-ring">
            <p className="text-xs">VISITING DATE</p>
            <Input
              type="date"
              className="px-0 border-none focus-visible:outline-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:border-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
            />
          </div>
          <div className="bg-orange-400 p-4 rounded-md w-4/12 min-h-full flex justify-center items-center">
            <Label className="font-bold">Book Now</Label>
          </div>
        </Card>
      </div>
    </div>
  );
}
