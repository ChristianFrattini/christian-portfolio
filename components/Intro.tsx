"use client";

import Image from "next/image";
import React from "react";
import profile from "@/public/profile.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSection.context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id={"home"}
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <Image
              src={profile}
              alt={"profile_picture"}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className={
                "rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
              }
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 -left-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 125,
              delay: 0.3,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Christian,</span> a{" "}
        <span className="font-bold">Junior Front-End Developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience and a solid
        foundation in <span className="font-bold">Back-End Development</span>. I
        specialize in building user-friendly, responsive{" "}
        <span className="italic">websites</span> using React and primarily work
        with the <span className="underline"> Next.js</span> framework.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="bg-gray-900 outline-none text-white px-7 py-3 flex items-center
           gap-2 rounded-full focus:scale-110 hover:scale-105
           hover:bg-gray-950 active:scale-105 transition group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white outline-none text-black px-7 py-3 flex items-center
           gap-2 rounded-full focus:scale-110 hover:scale-105
            active:scale-105 transition group hover:cursor-pointer border border-black/10 dark:bg-white/10 dark:text-gray-200"
          href={"/Christian-Frattini-CV.pdf"}
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          className="bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
            active:scale-105 hover:text-gray-950 transition group hover:cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/90"
          href={"https://www.linkedin.com/in/christianfrattini/"}
          target={"_blank"}
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white  p-4 flex text-gray-700 text-[1.35rem]  items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
            active:scale-105 hover:text-gray-950 transition  group hover:cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/90"
          href={"https://github.com/ChristianFrattini/"}
          target={"_blank"}
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
