import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout heading="Homepage">
      <div className="px-4 py-8 sm:px-0">
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <Image
                className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                src="/donald.jpg"
                alt="Donald Trump"
                width={256}
                height={256}
              />
            </div>

            <div className="relative lg:ml-10">
              <blockquote className="relative">
                <div className="text-xl font-medium italic leading-9 text-gray-600">
                  {/* Testimonials provided by https://chat.openai.com/ :-) */}
                  <p className="mb-3 text-gray-600">
                    &ldquo;This e-shop has the best seed tools you&apos;ve ever seen, believe me.
                    Nobody has better seed tools, I guarantee it.
                  </p>
                  <p className="mb-3 text-gray-600">
                    I can tell you, these seed tools are the real deal, folks. They&apos;re huge,
                    they&apos;re fantastic, they&apos;re amazing.
                  </p>
                  <p className="mb-3">
                    Try them out and if you&apos;re not completely happy, They&apos;ll give you your
                    money back, no questions asked. Trust me, you won&apos;t find a better deal
                    anywhere else.&rdquo;
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src="/donald.jpg"
                        alt="Donald Trump"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium text-gray-900">Donald Trump</div>
                      <div className="text-base font-medium text-indigo-600">CEO, Planet Earth</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
