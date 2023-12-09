import DescriptionComponent from "@/components/DescriptionComponent";
import TimelineComponent from "@/components/TimelineComonent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <DescriptionComponent />
      <TimelineComponent />
    </main>
  );
}
