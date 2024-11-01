import Image from "next/image";
import { Label } from "../../ui/label";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="p-16 md:flex justify-between gap-3 space-y-2">
        <div className="w-full gap-3">
          <Image
            src="/assets/images/brand.png"
            alt="Brand Logo"
            height={300}
            width={400}
          />
          <Label className="text-slate-600 font-light">
            Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus facilisi
            vitae sit varius aenean sed augue.
          </Label>
        </div>
        <div className="grid-cols-2 md:flex w-full justify-between space-y-3 md:space-y-0">
          <div className="flex flex-col gap-2">
            <Label>Attraction</Label>
            <Link href={""} className="text-slate-600 font-light text-sm">Gili Island</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Moto GP</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Edupark</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Food & Beverage</Label>
            <Link href={""} className="text-slate-600 font-light text-sm">Coconut</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Ayam Taliwang</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Ketoprak</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Hotels</Label>
            <Link href={""} className="text-slate-600 font-light text-sm">Johny Walker</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Samawa</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Roomate</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Social Media</Label>
            <Link href={""} className="text-slate-600 font-light text-sm">Instagram</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Facebook</Link>
            <Link href={""} className="text-slate-600 font-light text-sm">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 h-[64px] flex justify-center items-center">
        <Label className="text-slate-600 text-sm">
          Copyright 2024 © ITDC All Rights Reserved
        </Label>
      </div>
    </footer>
  );
}
