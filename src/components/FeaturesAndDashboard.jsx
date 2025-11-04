import { motion } from "framer-motion";
import { CreditCard, History, User, GraduationCap, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Pembayaran Digital",
    desc: "Bayar SPP, daftar ulang, dan biaya administrasi langsung dari ponsel.",
    icon: CreditCard,
    color: "from-[#0066FF] to-[#00C2FF]",
  },
  {
    title: "Riwayat Transaksi",
    desc: "Pantau seluruh transaksi dengan filter pintar dan bukti otomatis.",
    icon: History,
    color: "from-[#00C2FF] to-[#FF4081]",
  },
  {
    title: "Akun Mahasiswa",
    desc: "Profil terhubung ke NIM untuk validasi status dan program studi.",
    icon: User,
    color: "from-[#FF4081] to-[#FFD700]",
  },
  {
    title: "Integrasi Akademik",
    desc: "Terkoneksi dengan sistem kampus untuk tagihan dan verifikasi.",
    icon: GraduationCap,
    color: "from-[#00C2FF] to-[#0066FF]",
  },
  {
    title: "Keamanan Tinggi",
    desc: "Proteksi data & transaksi dengan enkripsi dan verifikasi multi-lapis.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-cyan-400",
  },
];

function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 text-white shadow-2xl backdrop-blur"
    >
      <div className="flex items-center justify-between rounded-2xl bg-white/10 p-3">
        <div className="text-sm font-semibold">Dashboard DUITAMA</div>
        <div className="text-xs text-white/70">Realtime</div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-white/10 p-4"
        >
          <div className="text-xs text-white/70">Saldo Dompet</div>
          <div className="mt-1 text-2xl font-bold">Rp 2.450.000</div>
          <motion.div
            animate={{ width: ["30%", "55%", "45%", "70%", "60%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mt-3 h-2 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#0066FF]"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl bg-white/10 p-4"
        >
          <div className="text-xs text-white/70">Tagihan Aktif</div>
          <div className="mt-1 text-2xl font-bold">2</div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["SPP", "Daftar Ulang", "Dokumen"].map((x, i) => (
              <div key={i} className="rounded-lg bg-white/10 px-2 py-1 text-center text-[10px]">
                {x}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl bg-white/10 p-4"
        >
          <div className="text-xs text-white/70">Aktivitas Terakhir</div>
          <div className="mt-2 space-y-2 text-sm">
            {[
              { name: "SPP Semester 4", amt: "-Rp 1.500.000" },
              { name: "Dokumen Ijazah", amt: "-Rp 50.000" },
              { name: "Top Up Dompet", amt: "+Rp 2.000.000" },
            ].map((it, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span>{it.name}</span>
                <span className={it.amt.startsWith("+") ? "text-emerald-300" : "text-rose-300"}>{it.amt}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FeaturesAndDashboard() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-[#00111f] via-[#001829] to-[#00111f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Fitur Unggulan & Preview Dashboard
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
              >
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${f.color} opacity-20 blur-2xl transition duration-500 group-hover:opacity-30`} />
                <div className="flex items-center gap-3">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${f.color} text-black shadow` }>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
