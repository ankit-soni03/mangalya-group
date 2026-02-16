"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";

/* 🔗 Project → Brochure map */
const BROCHURE_MAP: Record<string, string> = {
  "mangalya-novena-green":
    "/our-projects/mangalya-novena-green/Novena-Greens-Brochure.pdf",

  "mangalya-anant":
    "/our-projects/mangalya-anant/anant_brochure.pdf",

  "mangalya-ophira":
    "/our-projects/mangalya-ophira/ophira_brochure.pdf",
};

export default function EnquirePopup({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const projectSlug = pathname.split("/").pop() || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<any>({});

  if (!open) return null;

  const validate = () => {
    const err: any = {};

    if (!name.trim()) err.name = "Name required";

    if (!email.trim()) err.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = "Invalid email";

    if (!number.trim()) err.number = "Number required";
    else if (!/^\d{10}$/.test(number))
      err.number = "Enter 10 digit number";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const brochure = BROCHURE_MAP[projectSlug];
    if (!brochure) {
      alert("Brochure not found");
      return;
    }

    // 🔽 Auto download
    const link = document.createElement("a");
    link.href = brochure;
    link.download = brochure.split("/").pop()!;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur BG */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={() => setOpen(false)}
      />

      {/* Popup */}
      <div className="relative w-[420px] bg-[#f7f7f7] rounded-md shadow-2xl px-8 py-7">
        <h2 className="text-xl font-semibold mb-6">Enquire Now</h2>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Full name"
              className="w-full h-[52px] rounded-2xl border px-5 text-sm bg-white"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full h-[52px] rounded-2xl border px-5 text-sm bg-white"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Number */}
          <div>
            <input
              value={number}
              maxLength={10}
              onChange={(e) =>
                setNumber(e.target.value.replace(/\D/g, ""))
              }
              placeholder="Enter Number"
              className="w-full h-[52px] rounded-2xl border px-5 text-sm bg-white"
            />
            {errors.number && (
              <p className="text-xs text-red-500 mt-1">{errors.number}</p>
            )}
          </div>

          {/* Message (optional) */}
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            className="w-full rounded-2xl border px-5 py-3 text-sm bg-white resize-none"
          />

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-10 py-3 text-sm rounded-sm hover:bg-gray-900 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
