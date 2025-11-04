import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-sky-900/20 to-[#00111f]/80"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-extrabold tracking-tight md:text-7xl"
          >
            <span className="bg-gradient-to-r from-[#00C2FF] via-[#0066FF] to-[#FF4081] bg-clip-text text-transparent drop-shadow">DUITAMA</span>
          </motion.h1>

          <p className="mx-auto max-w-2xl text-base md:text-lg text-white/90">
            Semua urusan bayar kampus, cukup di satu aplikasi.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#contact"
              className="group rounded-full bg-[#0066FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105 hover:bg-[#0057d6] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Get Started
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Learn More
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xs md:text-sm text-white/70"
          >
            Digital Unified Information of Transaction and Management Accounting
          </motion.div>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur md:flex"
        >
          <span>Fintech • Kampus • Modern</span>
        </motion.div>
      </div>
    </section>
  );
}
