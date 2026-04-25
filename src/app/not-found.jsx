"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 text-white">
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          404
        </motion.h1>

        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-2xl font-semibold"
        >
          Page Not Found
        </motion.h2>

        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-gray-400"
        >
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </motion.p>

       
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex gap-4 justify-center"
        >
          
          <Link href="/">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium hover:scale-105 cursor-pointer transition-transform duration-300 shadow-lg">
              Go Home
            </button>
          </Link>

          
          <button
            onClick={() => router.back()}
            className="rounded-full border border-gray-500 px-6 py-3 font-medium hover:scale-105 cursor-pointer hover:bg-[#434242] transition-all duration-300 shadow-lg"
          >
            Go Back
          </button>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <div className="w-full h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
