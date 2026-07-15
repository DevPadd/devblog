import posts from "@/data/posts";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className=" m-auto text-2xl text-center mt-10 ">Recent Blogs</h1>
      <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="border border-zinc-800 p-4 w-50 min-h-100 rounded-lg flex flex-col justify-between"
            >
              <div className="mb-10">
                <h1 className="mb-2">{post.title}</h1>
                <div className="w-fill p-2 h-30 bg-zinc-900 rounded-lg"></div>
              </div>

              <div>
                <p className="text-xs mb-2">{post.excerpt}</p>
                <Link
                  href={post.slug}
                  className="px-2 py-1 border rounded-lg text-sm border-zinc-800 hover:bg-zinc-800"
                >
                  See post
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
