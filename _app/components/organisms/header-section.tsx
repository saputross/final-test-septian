import { Button } from "../ui/button";
import { Label } from "../ui/label";

interface HeaderSectionProps {
  title: string;
  desc: string;
  actionLabel: string;
}

export default function HeaderSection(props: HeaderSectionProps) {
  return (
    <div className="md:flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <Label className="text-3xl">{props.title}</Label>
          <Label className="text-sm text-slate-500">
            {props.desc}
          </Label>
        </div>
        <Button className="md:ml-5 mt-3 md:mt-0 bg-orange-200 text-default">
          {props.actionLabel}
        </Button>
      </div>
  );
}