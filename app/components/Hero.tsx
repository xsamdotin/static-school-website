"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 lg:pt-44">
      
      <img
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
        alt="School campus"
         className="absolute inset-0 h-full w-full object-cover animate-[heroZoom_20s_ease-in-out_infinite]"
      />

      
      
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl animate-pulse" />

      
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-blue-800/80" />

      
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-1.5 text-sm text-accent backdrop-blur-sm mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Admissions Open 2025–26
        </motion.div>

        
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
        >
          Empowering Minds,
          <br />
          <span className="text-accent">Shaping Futures</span>
        </motion.h1>

        
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/85 leading-relaxed"
        >
          Nurturing excellence, character, and lifelong learning through a
          blend of tradition and innovation.
        </motion.p>

        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/admissions"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-accent px-8 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Apply Now
          </Link>

          <Link
            href="/about"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/30 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          >
            Discover More
          </Link>
        </motion.div>
      </div>

     
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border border-white/40 flex justify-center">
          <div className="mt-2 h-2 w-2 rounded-full bg-white animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}