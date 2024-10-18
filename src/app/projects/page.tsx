import Projects from "@/components/Projects";
import { Cover } from "@/components/ui/cover";

export default async function ProjectPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my<Cover>Engineering</Cover> projects.</h1>

      <Projects />
    </article>
  );
}