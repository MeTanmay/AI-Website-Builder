"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, demoLink, downloadLink } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/`} className="relative block aspect-[380/210]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>
              {`${title.slice(0, 40)}`}
            </Link>
          </h3>

          <p className="mb-4 line-clamp-3">{metadata}</p>

          <div className="mt-6 flex justify-end space-x-2">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-500 hover:bg-gray-300"
            >
              View Demo
            </a>
            <a
              href={downloadLink}
              download
              className="hover:bg-primary-dark rounded-lg bg-primary px-4 py-2 text-sm text-white"
            >
              Download Now
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;


