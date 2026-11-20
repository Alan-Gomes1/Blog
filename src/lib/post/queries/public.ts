import { postRepository } from "@/src/repositories/post";
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export const findAllPublicPostsCached = async () => {
  "use cache";
  cacheLife("hours");
  cacheTag("posts");

  return await postRepository.findAllPublic();
};

export const findPublicPostBySlugCached = async (slug: string) => {
  "use cache";
  cacheLife("hours");
  cacheTag("posts", `post-${slug}`);

  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);
  if (!post) notFound();
  return post;
};
