"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <h1>Hello world</h1>
      </motion.div>
    </div>
  );
}
