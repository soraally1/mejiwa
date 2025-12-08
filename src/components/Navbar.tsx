"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  LogIn,
  Home,
  Heart,
  PawPrint,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMijiOpen, setIsMijiOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex items-center justify-between px-8 py-6 bg-primary fixed top-0 left-0 right-0 z-50"
      >
        {/* Logo mejiwa*/}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-secondary-dark font-bold text-2xl cursor-pointer"
        >
          MEJIWA
        </motion.div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-8">
          {/* Menu */}
          <div className="flex items-center gap-6">
            <Link href="/Home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-secondary-dark font-semibold text-lg hover:opacity-75 transition-opacity cursor-pointer"
              >
                Beranda
              </motion.div>
            </Link>

            {/* Miji Dropdown */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => setIsMijiOpen(true)}
                onMouseLeave={() => setIsMijiOpen(false)}
                onClick={() => setIsMijiOpen(!isMijiOpen)}
              >
                <span className="text-secondary-dark font-semibold text-lg hover:opacity-75 transition-opacity">
                  Miji
                </span>
                <motion.div
                  animate={{ rotate: isMijiOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-secondary-dark" />
                </motion.div>
              </motion.div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isMijiOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[180px]"
                    onMouseEnter={() => setIsMijiOpen(true)}
                    onMouseLeave={() => setIsMijiOpen(false)}
                  >
                    <Link
                      href="/CeritaMiji"
                      className="block px-6 py-3 text-secondary-dark font-medium hover:bg-primary-light transition-colors"
                    >
                      Cerita Miji
                    </Link>
                    <Link
                      href="/SuaraMiji"
                      className="block px-6 py-3 text-secondary-dark font-medium hover:bg-primary-light transition-colors"
                    >
                      Suara Miji
                    </Link>
                    <Link
                      href="/DeteksiMiji"
                      className="block px-6 py-3 text-secondary-dark font-medium hover:bg-primary-light transition-colors"
                    >
                      Deteksi Miji
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#sehat-jiwa">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-secondary-dark font-semibold text-lg hover:opacity-75 transition-opacity cursor-pointer"
              >
                Sehat Jiwa
              </motion.div>
            </Link>
          </div>

          {/* Autentikasi */}
          <div className="flex items-center gap-4">
            <Link href="/Register">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-secondary-dark text-white font-semibold rounded-full hover:shadow-lg transition-shadow cursor-pointer"
              >
                Daftar
              </motion.div>
            </Link>

            <Link href="/login">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-secondary-dark font-semibold text-lg hover:opacity-75 transition-opacity flex items-center gap-1 cursor-pointer"
              >
                Login
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* mmobile*/}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-primary px-6 py-4"
      >
        <div className="text-secondary-dark font-bold text-xl text-center">
          MEJIWA
        </div>
      </motion.div>

      {/* Mobile Bottom menu*/}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-2xl"
      >
        <div className="flex items-center justify-around px-4 py-3">
          {/* beranda */}
          <Link href="/Home">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 px-4 py-2"
            >
              <Home
                size={24}
                className="text-secondary-dark"
                strokeWidth={2.5}
              />
              <span className="text-xs font-semibold text-secondary-dark">
                Beranda
              </span>
            </motion.div>
          </Link>

          {/* miji */}
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMijiOpen(!isMijiOpen)}
              className="flex flex-col items-center gap-1 px-4 py-2"
            >
              <PawPrint
                size={24}
                className="text-secondary-dark"
                strokeWidth={2.5}
              />
              <span className="text-xs font-semibold text-secondary-dark">
                Miji
              </span>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isMijiOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[160px]"
                >
                  <Link
                    href="/CeritaMiji"
                    onClick={() => setIsMijiOpen(false)}
                    className="block px-5 py-3 text-secondary-dark font-medium hover:bg-primary transition-colors text-center"
                  >
                    Cerita Miji
                  </Link>
                  <Link
                    href="/SuaraMiji"
                    onClick={() => setIsMijiOpen(false)}
                    className="block px-5 py-3 text-secondary-dark font-medium hover:bg-primary transition-colors text-center"
                  >
                    Suara Miji
                  </Link>
                  <Link
                    href="/DeteksiMiji"
                    onClick={() => setIsMijiOpen(false)}
                    className="block px-5 py-3 text-secondary-dark font-medium hover:bg-primary transition-colors text-center"
                  >
                    Deteksi Miji
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sehat Jiwa */}
          <Link href="/SehatJiwa">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 px-4 py-2"
            >
              <Heart
                size={24}
                className="text-secondary-dark"
                strokeWidth={2.5}
              />
              <span className="text-xs font-semibold text-secondary-dark">
                Sehat Jiwa
              </span>
            </motion.div>
          </Link>

          {/* Daftar */}
          <Link href="/Register">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 px-4 py-2"
            >
              <UserPlus
                size={24}
                className="text-secondary-dark"
                strokeWidth={2.5}
              />
              <span className="text-xs font-semibold text-secondary-dark">
                Daftar
              </span>
            </motion.div>
          </Link>

          {/* Login */}
          <Link href="/login">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 px-4 py-2"
            >
              <LogIn
                size={24}
                className="text-secondary-dark"
                strokeWidth={2.5}
              />
              <span className="text-xs font-semibold text-secondary-dark">
                Login
              </span>
            </motion.div>
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
