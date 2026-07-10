import { Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="p-4 flex  items-center justify-between border border-zinc-800">
      <Link href="/">dionaufal@devblog</Link>
      <button className="p-2 rounded-md border border-zinc-800 hover:bg-zinc-800 ">
        <Sun className="w-4 h-4" />
      </button>
    </div>
  );
}
