import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./navigation";

type Props = {
  children: ReactNode;
  title: string;
};

export default function Layout({ children, title }: Props) {
  const pageTitle = `${title === "Homepage" ? "" : `${title} | `}Trezor shop`;

  return (
    <div className="min-h-full">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
