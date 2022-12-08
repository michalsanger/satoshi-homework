import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./navigation";

type Props = {
  children: ReactNode;
  title?: string;
  heading?: string;
};

export default function Layout({ children, title, heading }: Props) {
  return (
    <div className="min-h-full">
      <Head>
        <title>{getPageTitle(title, heading)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <div className="py-10">
        <header>
          <Header title={heading} />
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

function getPageTitle(title?: string, heading?: string) {
  if (title == null && heading == null) {
    return "Trezor shop";
  }

  if (heading === "Homepage") {
    return "Trezor shop";
  }

  if (title != null) {
    return `${title} | Trezor shop`;
  }

  if (heading != null) {
    return `${heading} | Trezor shop`;
  }
}

const Header = ({ title }: Pick<Props, "title">) => {
  if (title == null) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{title}</h1>
    </div>
  );
};
