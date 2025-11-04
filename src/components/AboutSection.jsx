import { motion } from "framer-motion";

const aboutItems = [
  {
    label: "DUITAMA = Duit Anak Kaputama",
    desc: "Identitas finansial digital untuk mahasiswa STMIK Kaputama — ringkas, aman, dan serba bisa.",
  },
  {
    label: "Digital Unified Information of Transaction and Management Accounting",
    desc: "Sistem terpadu untuk pembayaran, riwayat transaksi, dan pengelolaan akun akademik dalam satu aplikasi.",
  },
  {
    label: "Dompet Universitas & Informasi Transaksi Akademik",
    desc: "Semua urusan bayar kampus: SPP, daftar ulang, hingga dokumen — cukup di DUITAMA.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-[#00111f] via-[#001a2e] to-[#00111f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Kenalan dengan DUITAMA
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {aboutItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="bg-gradient-to-r from-[#00C2FF] to-[#0066FF] bg-clip-text text-lg font-semibold text-transparent">
                {item.label}
              </h3>
              <p className="mt-3 text-sm text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
