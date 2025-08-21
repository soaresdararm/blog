import clsx from "clsx";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-3xl/normal font-extrabold py-4",
          "sm:text-2xl/normal sm:py-4",
          "md:text-3xl/normal md:py-6",
          "lg:text-4xl/normal lg:py-7"
        )}
      >
        <Link href="/"> Blog da Dara</Link>
      </h1>
    </header>
  );
}
