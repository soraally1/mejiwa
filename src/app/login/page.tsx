"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PawPrint from "@/assets/paw.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary via-primary-light to-primary flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Paw Prints */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-10 left-10 opacity-20 "
      >
        <Image
          src={PawPrint}
          alt="Paw Print"
          width={100}
          height={100}
          className="w-24 h-24"
        />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-20 right-20 opacity-20 scale-125 "
      >
        <Image
          src={PawPrint}
          alt="Paw Print"
          width={100}
          height={100}
          className="w-24 h-24"
        />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-1/2 right-10 opacity-15 scale-75"
      >
        <Image
          src={PawPrint}
          alt="Paw Print"
          width={100}
          height={100}
          className="w-24 h-24"
        />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "3s" }}
        className="absolute bottom-10 left-1/4 opacity-15 scale-90"
      >
        <Image
          src={PawPrint}
          alt="Paw Print"
          width={100}
          height={100}
          className="w-24 h-24"
        />
      </motion.div>
      {/* isian */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Logo nya bos */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-4xl font-bold text-secondary-dark mb-2">
              MEJIWA
            </h1>
            <p className="text-gray-600 text-lg">Selamat Datang Kembali!</p>
          </motion.div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-secondary-dark mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="masukkan email anda"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-gray-700"
                  required
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-secondary-dark mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="masukkan password anda"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-gray-700"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary-dark transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>
            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 41, 107, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-linear-to-r from-secondary-dark to-secondary text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Masuk
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.button>
          </form>
          <motion.div
            variants={itemVariants}
            className="my-8 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">atau</span>
            <div className="flex-1 h-px bg-gray-300" />
          </motion.div>

          {/* Register Link */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <Link
                href="/Register"
                className="text-secondary-dark font-bold hover:text-primary transition-colors"
              >
                Daftar Sekarang
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
