import PostsListAdmin from "@/src/components/Admin/PostsListAdmin";
import { SpinLoader } from "@/src/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function PostPage() {
  return (
    <Suspense fallback={<SpinLoader className="mb-16" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
