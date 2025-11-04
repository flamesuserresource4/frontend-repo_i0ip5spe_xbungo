import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSupportFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate success state (no backend call required for this landing)
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-[#00111f] via-[#001a2e] to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Contact & Support
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">Ada pertanyaan?</h3>
            <p className="mt-2 text-sm text-white/80">
              Tim kami siap membantu. Kirim pesan melalui formulir atau hubungi kami.
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/85">
                <Mail className="h-4 w-4 text-[#00C2FF]" /> support@duitama.app
              </div>
              <div className="flex items-center gap-2 text-white/85">
                <Phone className="h-4 w-4 text-[#FFD700]" /> +62 812-3456-7890
              </div>
              <div className="flex items-center gap-2 text-white/85">
                <MessageCircle className="h-4 w-4 text-[#FF4081]" /> Live chat 09.00–21.00 WIB
              </div>
            </div>

            {/* Floating chat bubble animation */}
            <div className="relative mt-6 h-28 w-full">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-6 top-6 rounded-2xl bg-[#0066FF] px-4 py-2 text-sm text-white shadow-lg"
              >
                Halo! Ada yang bisa dibantu?
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-6 bottom-2 rounded-2xl bg-white/10 px-4 py-2 text-sm text-white/90 shadow-lg backdrop-blur"
              >
                Saya ingin bayar SPP ✨
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-white/80">Nama</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#00C2FF]"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div>
                <label className="text-sm text-white/80">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#00C2FF]"
                  placeholder="email@kampus.ac.id"
                />
              </div>
              <div>
                <label className="text-sm text-white/80">Pesan</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#00C2FF]"
                  placeholder="Ceritakan kebutuhanmu..."
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#FF4081] px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
              >
                Kirim Pesan
              </button>
              {sent && (
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  Pesan terkirim! Kami akan segera menghubungi Anda.
                </div>
              )}
            </div>
          </motion.form>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/70">
          © 2025 DUITAMA - STMIK Kaputama
        </div>
      </div>
    </section>
  );
}
