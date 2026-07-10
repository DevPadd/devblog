import Link from "next/link";
import { MoveRight } from "lucide-react";
export default function Home() {
  return (
    <div className="mx-4 my-8 text-xl ">
      <h1 className="mb-4">Welcome to devblog!</h1>
      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        alias, iusto a, optio unde fugit excepturi modi sapiente autem facilis
        praesentium, quis similique ipsum at.
      </p>
      <p className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur hic
        laudantium beatae, incidunt a fuga vero sequi molestiae! Laboriosam
        aliquid consectetur nemo, voluptate alias minus similique nostrum
        praesentium repellat corrupti.
      </p>

      <Link
        href={`/blog/`}
        className="items-center text-sm mt-4 w-fit rounded-md flex p-2 border border-zinc-800 hover:bg-zinc-800"
      >
        <span className="mr-2">See more</span> <MoveRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
