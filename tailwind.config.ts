import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "rocket-login": "url('/로켓로그인이미지.webp')",
        "rocket-join-us": "url('/로켓회원가입이미지.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
} satisfies Config;
