import NewestEvent from "@/root/_app/_modules/home/newest-event";
import "../../globals.css";
import promotions from "@/root/_app/_modules/home/promotion";

export default function HomeLayout({
  banner,
  recommendation,
  newestEvent,
  promotions,
  accomodation,
}: {
  banner: React.ReactNode;
  recommendation: React.ReactNode;
  newestEvent: React.ReactNode;
  promotions: React.ReactNode;
  accomodation: React.ReactNode;
}) {
  return (
    <main>
      <div className="w-full">
        <div className="w-full">{banner}</div>
        <div className="mt-[100px] w-full">{promotions}</div>
        <div className="mt-[100px] w-full">{newestEvent}</div>
        <div className="mt-[100px] w-full">{recommendation}</div>
        <div className="mt-[100px] w-full">{accomodation}</div>
      </div>
    </main>
  );
}
