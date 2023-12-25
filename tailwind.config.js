/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ac00ff",

          secondary: "#00f900",

          accent: "#00d1cc",

          neutral: "#281c19",

          "base-100": "#fcfcfc",

          info: "#00e3ff",

          success: "#008a1d",

          warning: "#b96900",

          error: "#f8002b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
