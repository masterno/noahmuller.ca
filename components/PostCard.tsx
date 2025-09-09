import Link from "next/link";
import Image from "next/image";

export type PostCardProps = {
  title: string;
  slug: string;
  date: string; // ISO
  excerpt?: string;
  coverImage?: string | null;
};

export default function PostCard({ title, slug, date, excerpt, coverImage }: PostCardProps) {
  return (
    <article className="group flex gap-4 rounded-lg border p-4 transition-colors hover:bg-foreground/5">
      {coverImage ? (
        <div className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-md border sm:block">
          <Image src={coverImage} alt="cover" fill className="object-cover" />
        </div>
      ) : null}
      <div className="min-w-0">
        <h2 className="text-lg font-semibold">
          <Link href={`/blog/${slug}`} className="underline-offset-4 group-hover:underline">
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-xs text-foreground/60">{new Date(date).toLocaleDateString()}</p>
        {excerpt ? <p className="mt-2 line-clamp-3 text-sm text-foreground/80">{excerpt}</p> : null}
      </div>
    </article>
  );
}
