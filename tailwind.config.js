/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        synthBg: "#1a1025", // গভীর ডার্ক পার্পল ব্যাকগ্রাউন্ড
        synthDark: "#0f0918", // আরও ডার্ক টোন
        synthPink: "#ff7edb", // নিয়ন পিঙ্ক (চমকানোর জন্য)
        synthCyan: "#36f9f6", // নিয়ন সায়ান (গ্লোয়িং টেক্সট)
        synthPurple: "#b534e6", // কোর পার্পল
        synthYellow: "#fede5d", // নিয়ন ইয়োলো
      },
      boxShadow: {
        "neon-cyan": "0 0 15px rgba(54, 249, 246, 0.4)",
        "neon-pink": "0 0 15px rgba(255, 126, 219, 0.4)",
      },
    },
  },
  plugins: [],
};
