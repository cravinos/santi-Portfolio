import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import {
  ArrowDown,
  ArrowDownIcon,
  FileDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const SANTI_BIRTH_YEAR = 2001;
const LIMIT = 2; // max show 2
const words = ["Learn more about me below", "Check out my Experience & Projects"]
export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/ted.jpg"
          alt="Photo of Santi!"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Hey <Cover>Santi</Cover> here 👋</h1>
          <p className="mt-4 font-light">
            {/* Update my age */}
            {new Date().getFullYear() - SANTI_BIRTH_YEAR}
            -year-old software developer from England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 <br></br>now living in the U.S 🇺🇸
          </p>
          <p className="mt-2 font-light">
            I like to develop full-stack applications, lift at the gym without a spotter, and watch <s>Football</s> Soccer ⚽
          </p>
          <div className="mt-4 flex items-end gap-1">
            <p className="font-semibold"><FlipWords words={words}/></p>
            <ArrowDown className="size-5 animate-bounce" />
          </div>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowDownIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowDownIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}