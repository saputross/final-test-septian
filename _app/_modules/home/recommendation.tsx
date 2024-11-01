import { title } from "process";
import { Label } from "../../components/ui/label";
import Image from "next/image";

export default function Recommendation() {
  const data = [
    {
      title: "Imagine Dragon",
      date: "11 Desember 2024",
      image: "/assets/images/recommend-1.png",
    },
    {
      title: "Imagine Dragon",
      date: "11 Desember 2024",
      image: "/assets/images/recommend-2.png",
    },
    {
      title: "Imagine Dragon",
      date: "11 Desember 2024",
      image: "/assets/images/recommend-3.png",
    },
    {
      title: "Imagine Dragon",
      date: "11 Desember 2024",
      image: "/assets/images/recommend-4.png",
    },
  ];
  return (
    <div className="mx-auto px-5 md:px-20">
      <div className="self-center flex flex-col justify-center items-center gap-3 w-full bg-slate-100 rounded-3xl p-8">
        <Label className="text-3xl">Best of the Best Things to Do</Label>
        <Label className="text-sm text-slate-500">
          The Travelers’ Choice Awards Best of the Best title celebrates the
          highest level of excellence in travel
        </Label>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
          {data.map((item, index) => (
            <div key={index} className="w-full relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover rounded-none w-full"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
