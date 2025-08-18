import EmergencyNews from "./_components/home/EmergencyNews";
import Main from "./_components/home/Main";


export default function Home() {
  return (
    <div className="h-full flex">
      <EmergencyNews/>
      <Main/>
    </div>
  );
}
