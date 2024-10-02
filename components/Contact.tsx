"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/SendEmail.action";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.75);

  // Using useState to manage pending state
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.currentTarget);

    try {
      const { data, error } = await sendEmail(formData); // Call your email sending function here
      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setPending(false); // Reset pending state after submission
    }
  };

  return (
    <motion.section
      ref={ref}
      id={"contact"}
      className={
        "mb-20 scroll-mt-28 sm:mb-28 w-[min(100%, 38rem)] mx-3 text-center"
      }
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className={"text-gray-700 -mt-5 dark:text-white/80"}>
        Please contact me at{" "}
        <a className="underline" href="mailto:chrifrat1@gmail.com">
          chrifrat1@gmail.com
        </a>{" "}
        or through the form below.
      </p>

      <form
        className={"mt-10 flex flex-col dark:text-black"}
        onSubmit={handleSubmit} // Use handleSubmit function for form submission
      >
        <input
          className={
            "h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          }
          type={"email"}
          name="senderEmail"
          placeholder={"Please, enter your email"}
          required
          maxLength={500}
        />
        <textarea
          className={
            "h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          }
          placeholder={"Please, enter your message"}
          required
          maxLength={500}
          name="message"
        />

        <button
          type={"submit"}
          className={
            "h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 group focus:scale-110 hover:scale-105 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
          }
          disabled={pending} // Disable button when pending
        >
          {pending ? (
            <div
              className={
                "h-5 w-5 animate-spin rounded-full cursor-progress border-b-2 border-white"
              }
            ></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane
                className={
                  "text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                }
              />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
