import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import brainwave from "@/public/brainwave.png";
import travelapp from "@/public/travelapp.png";
import crownclothing from "@/public/crownclothing.png";
import uniShoes from "@/public/unishoes.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Newcastle University",
    location: "Newcastle University, United Kingdom",
    description:
      "Graduated from Newcastle University with a strong 2.2 in Electronics and Computer Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Newcastle upon Tyne, United Kingdom",
    description:
      "Currently working as a part-time Front-End Engineer freelancer at Boxed Cat Development LTD (startup). My Stack includes React, Next.js, TypeScript and Tailwind",
    icon: React.createElement(CgWorkAlt),
    date: "2023 -present",
  },
] as const;

export const projectsData = [
  {
    title: "UniShoes",
    description:
      "A shoe eCommerce website built with Next.js and TypeScript, featuring Kinde Auth for user authentication, Neon PostgreSQL with Prisma for data management, and Redis for performance optimization.",
    tags: ["Next.js", "Neon", "Prisma", "Kinde-Auth", "Redis"],
    imageUrl: uniShoes,
    link: "https://unishoes.vercel.app/",
  },
  {
    title: "Brainwave",
    description:
      "This project involved building a responsive landing page with animations, utilizing various styling techniques and methodologies",
    tags: ["React", "Next.js", "Tailwind", "Javascript"],
    imageUrl: brainwave,
    link: "https://brainwave-three-beta.vercel.app/",
  },
  {
    title: "Travel App",
    description:
      "This project involved building a responsive landing page with animations, utilizing various styling techniques and methodologies. Typescrict was implemented for this project",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: travelapp,
    link: "https://travel-app-landing-page-gold.vercel.app/",
  },
  {
    title: "CrownClothing",
    description:
      "A full-stack eCommerce website that enables users to browse a product catalog, create and manage accounts, and securely process payments through Stripe.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Redux"],
    imageUrl: crownclothing,
    link: "https://calm-caramel-aa0d16.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Firebase",
  "Appwrite",
  "PostgreSQL Neon",
  "Prisma",
  "Kinde-Auth",
  "Redis",
] as const;
