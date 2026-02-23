"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const toEmail = "khuongduy2004@gmail.com";

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio Contact from ${name || "Someone"}`;
    const body = `
Name: ${name}
Email: ${fromEmail}

Message:
${message}
    `;

    return `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [name, fromEmail, message]);

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* TOP ROW: Title (left) + Icon (right, centered over form column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-10">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
            Contact me!!!
          </h2>

          {/* Icon centered within the same width as the form column */}
          <div className="flex justify-center lg:justify-center">
            <Image
              src="/contact-icon.png"
              alt="Contact icon"
              width={160}
              height={160}
              className="invert opacity-95"
              priority={false}
            />
          </div>
        </div>

        {/* MAIN GRID: Info (left) + Form (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-10">
            <div>
              <div className="text-purple-400 text-3xl font-serif font-semibold">
                Email
              </div>
              <a
                href={`mailto:${toEmail}`}
                className="text-white text-xl hover:text-cyan-300 transition"
              >
                {toEmail}
              </a>
            </div>

            <div>
              <div className="text-purple-400 text-3xl font-serif font-semibold">
                Phone
              </div>
              <a
                href="tel:+12158688693"
                className="text-white text-xl hover:text-cyan-300 transition"
              >
                +1 215 868 8693
              </a>
            </div>

            <div>
              <div className="text-purple-400 text-3xl font-serif font-semibold">
                Location
              </div>
              <div className="text-white text-xl">Philadelphia, PA</div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="w-full">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                if (!e.currentTarget.checkValidity()) return; // native popup
                e.preventDefault();
                window.location.href = mailtoHref;
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-md bg-transparent border border-white/30 px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                placeholder="Email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
                className="w-full rounded-md bg-transparent border border-white/30 px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-cyan-400 transition"
              />

              <textarea
                placeholder="Message"
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full rounded-md bg-transparent border border-white/30 px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-cyan-400 transition resize-none"
              />

              <button
                type="submit"
                className="w-full border border-cyan-500 text-cyan-300 py-4 rounded-md hover:bg-cyan-500/10 transition"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
