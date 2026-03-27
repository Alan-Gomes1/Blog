import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl",
    h2: "text-1xl/tight font-bold",
  };
  const communClasses = "my-4";
  return (
    <Tag className={clsx(headingClassesMap[Tag], communClasses)}>
      <Link className="hover:text-slate-600 transition" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
