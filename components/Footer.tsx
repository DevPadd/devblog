import { Heart } from "lucide-react";
export default function Footer() {
  return (
    <div className="p-4 border border-zinc-800 text-zinc-600 text-sm">
      <h1 className="text-center items-center justify-center flex">
        Made with{" "}
        <Heart className="mx-2 h-4 w-4 hover:text-red-400 hover:scale-[1.3]" />{" "}
        by DevPadd
      </h1>
    </div>
  );
}
