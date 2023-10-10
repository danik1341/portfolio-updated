import React from "react";

export default function Footer() {
  return (
    <footer className=" mb-10 px-4 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2030 Daniel Schmidt. All rights reserved.
      </small>
      <p className=" text-xs">
        <span className=" font-semibold">About this website:</span> built with
        React & Next.js (App Router), Typescript, Tailwind CSS, Framer Motion,
        React Email & Resend, hosted on Vercel.
      </p>
    </footer>
  );
}
