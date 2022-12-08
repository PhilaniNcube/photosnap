"use client"

import React, { Fragment, useState } from 'react'
import { Menu,Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';

const MobileMenu = () => {

  const [open, setOpen] = useState(false)

    const links = [
      {
        name: "Stories",
        href: "/stories",
      },
      {
        name: "Features",
        href: "/features",
      },
      {
        name: "Pricing",
        href: "/pricing",
      },
    ];

  return (
    <div className="md:hidden">
      <svg
        onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "10px" }}
            animate={{ opacity: 1, y: "0px" }}
            exit={{ opacity: 0, y: "0px" }}
            className="absolute top-0 right-0 bg-black w-3/4 max-w-md p-4 md:p-10 h-screen text-white"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-full isolate flex flex-col justify-around items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white absolute top-0 right-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              {links.map((link, i) => (
                <Link key={i} href={link.href} className="text-xl text-white font-medium uppercase">{link.name}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu
