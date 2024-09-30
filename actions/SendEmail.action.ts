"use server";
import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactForm from "@/email/ContactForm";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender Email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;

  try {
    await resend.emails.send({
      from: "Online Portfolio<onboarding@resend.dev>",
      to: ["chrifrat1@gmail.com"],
      subject: "New Message from Christian Portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactForm, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
