"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-3"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">
          Electronics and Computer Engineering
        </span>{" "}
        from <span className={"italic"}>Newcastle University</span>, I chose to
        pursue a career in Software Engineering. To expand my expertise, I
        completed a variety of online courses focused on both{" "}
        <span className="font-medium">Front-End</span> and{" "}
        <span className="font-medium">Back-End</span> development. My core
        technology stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>{" "}
        with additional proficiency in{" "}
        <span className="font-medium">TypeScript</span> but I&apos;m always
        eager to learn new technologies and broaden my knowledge. I am currently
        seeking for a <span className="font-medium">full-time position</span> as
        a software developer.
      </p>

      <p>
        <span className="italic">In my free time</span>, In my free time, I
        enjoy exploring new places, traveling, hiking, and maintaining a healthy
        lifestyle.
      </p>
    </motion.section>
  );
};

export default About;
