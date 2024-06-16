import Image from "next/image";
import Chatbox from "../components/Chatbox/Chatbox";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 h-full w-full overflow-hidden">
      <div className="w-full h-full">
        <Chatbox />
      </div>
    </main>
  );
}
