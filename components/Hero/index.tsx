"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import Link from "next/link";

const Hero = () => {
  const [user, setUser] = useState<User | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
      unsubscribe();
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Build Website Quickly With Solid AI
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                AI Website Builder {"   "}
                {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  SaaS
                </span> */}
              </h1>
              <p>
                AI-generated websites, tailored to your needs. Simple, powerful,
                and creative – build your website in minutes efficiently .
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
                  <a href="https://ai-powered-website-builder-nu.vercel.app/">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </a>
                  {/* {!user ? (
                    <>
                      <Link href="/auth/signin">
                        <button
                          aria-label="get started button"
                          className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                        >
                          Login to Get Started
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <a href="https://ai-website-builder2-frontend.onrender.com">
                        <button
                          aria-label="get started button"
                          className="bg-black flex rounded-full px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                        >
                          Get Started
                        </button>
                      </a>
                    </>
                  )} */}
                </div>

                {/* <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                /> */}
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/vector5.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/vector5.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
