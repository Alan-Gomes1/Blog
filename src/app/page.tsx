import { Container } from "../components/Container";
import Header from "../components/Header";
import { SpinLoader } from "../components/SpinLoader";
import { PostCoverImage } from "../components/PostCoverImage";
import { Suspense } from "react";
import { PostsList } from "../components/PostsList";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Post Cover Image",
            priority: true,
          }}
        />
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
