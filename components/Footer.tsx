import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Christian`s Online Portfolio. All
        rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend. Deployed with Vercel.
      </p>
    </footer>
  );
};

export default Footer;
