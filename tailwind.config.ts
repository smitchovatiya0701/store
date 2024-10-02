import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        figtree: ["Figtree"],
      },
      colors: {
        neturalBlack: "#1E293B",
        lightGray: "#475569",
        greenPea: "#399918",
        sandyBrown: "#E59854",
        ghostWhite: "#F5F5F5",
        ironGray: "#64748b9e",
        skyBlue: "#3B75E7",
        azureBlue: "#60A5FA",
        ashGray: "#6a6a6a",
        mistGray: "#EBEBEB",
        gainsboro: "#DCDCDC",
        fieryRed: "#C13515",
        lightSlatGray: "#b9c9f838",
        lightdarkBlack: "#3A4454",
        minCream: "#e6f4e6",
        Grayish: "#64748B",
      },
      boxShadow: {
        ProFileShodow: "0 2px 16px rgba(0, 0, 0, 0.12)",
        errorShadow: "0 6px 20px rgba(0,0,0,0.2)",
        propertyBoxShadow: "0 6px 16px rgba(0,0,0,0.12);",
        tagShadow: "0 6px 20px rgba(0,0,0,0.2);",
        availability: "0 6px 20px rgba(0,0,0,0.2)",
        categoriesShadow: "0px 1px 2px 0px rgba(31, 41, 55, 0.08)",
        guestPriceModal: "0 8px 28px rgba(0,0,0,0.28)",
        propertyShadow: "0px 12px 56px 0px rgba(6, 28, 61, 0.08)",
        calenderShadow: "rgba(0, 0, 0, 0.2) 0px 6px 20px ",
        hostuserShadow: "rgba(0,0,0,0.2) 0px 6px 20px 0px",
        photoShadow: "0px 12px 56px 0px rgba(6, 28, 61, 0.08)",
        previewHostShadow: "box-shadow: -2px 4px 20.4px 2px #0000001F",
        logoShadow: "0px 4px 21px 0px rgba(29, 78, 237, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
