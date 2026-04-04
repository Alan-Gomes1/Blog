import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "bryen-9";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Post Cover Image",
          priority: true,
        }}
      />

      <div className="flex flex-col sm:justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2024-06-01">
          2024-06-01
        </time>
        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor sit amet.
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          voluptates quam atque sint eligendi quas obcaecati non minus
          quibusdam, totam doloribus tempora ea veniam rem deserunt autem
          facilis commodi quasi!
        </p>
      </div>
    </section>
  );
}
