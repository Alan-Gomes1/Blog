import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

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

      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt="2024-06-01"
        title="Lorem ipsum dolor sit amet."
        excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptates quam atque sint eligendi quas obcaecati non minus quibusdam, totam doloribus tempora ea veniam rem deserunt autem facilis commodi quasi!"
      />
    </section>
  );
}
