import { PostModel } from "@/src/models/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/src/db/drizzle";
import { logColor } from "@/src/utils/log-color";
import { postsTable } from "@/src/db/drizzle/schemas";
import { eq } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    logColor("findAllPublic");
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    logColor("findBySlugPublic");
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });
    if (!post) throw new Error(`Post with slug ${slug} not found`);
    return post;
  }

  async findAll(): Promise<PostModel[]> {
    logColor("findAll");
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    logColor("findById");
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });
    if (!post) throw new Error(`Post with id ${id} not found`);
    return post;
  }

  async create(post: PostModel): Promise<PostModel> {
    logColor("create");
    const postExists = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, or }) =>
        or(eq(posts.id, post.id), eq(posts.slug, post.slug)),
      columns: { id: true },
    });
    if (!!postExists) {
      throw new Error("Já existe um post com esse ID ou Slug");
    }
    await drizzleDb.insert(postsTable).values(post);
    return post;
  }

  async delete(id: string): Promise<PostModel> {
    logColor("delete");
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });
    if (!post) throw new Error("Post não existe");
    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));
    return post;
  }

  async update(
    id: string,
    newPostData: Omit<PostModel, "id" | "slug" | "createdAt" | "updatedAt">,
  ): Promise<PostModel> {
    const oldPost = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });
    if (!oldPost) {
      throw new Error("Post não existe");
    }
    const updatedAt = new Date().toISOString();
    const postData = {
      author: newPostData.author,
      content: newPostData.content,
      coverImageUrl: newPostData.coverImageUrl,
      excerpt: newPostData.excerpt,
      published: newPostData.published,
      title: newPostData.title,
      updatedAt: updatedAt,
    };
    await drizzleDb
      .update(postsTable)
      .set(postData)
      .where(eq(postsTable.id, id));
    return {
      ...oldPost,
      ...postData,
    };
  }
}
