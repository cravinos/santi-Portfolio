import PostsWithSearch from "@/components/PostsWithSearch";
import { Cover } from "@/components/ui/cover";
import { getPosts } from "@/lib/posts";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");

export default async function BlogPage() {
  const posts = await getPosts(blogDirectory);

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">My <Cover>Tech</Cover> Blog.</h1>

      <PostsWithSearch posts={posts} />
    </article>
  );
}