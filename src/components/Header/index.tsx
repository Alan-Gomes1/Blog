import clsx from "clsx";

export default function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl/normal font-extrabold text-center py-8",
          "sm:text-5xl/normal sm:py-10",
          "md:text-6xl/normal md:py-12",
          "lg:text-7xl/normal lg:py-14",
        )}
      >
        <a href="#">The Blog</a>
      </h1>
    </header>
  );
}
