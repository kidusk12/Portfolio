/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", surface: "var(--surface)", line: "var(--border)",
        ink: "var(--text)", muted: "var(--muted)", gold: "var(--accent)",
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans Ethiopic"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
