import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			serif: ["var(--font-noto-serif)", "serif"],
  			sans: ["var(--font-noto-sans)", "sans-serif"]
  		},
  		colors: {
  			background: "var(--background)",
  			foreground: "var(--foreground)",
  			surface: {
  				DEFAULT: "#061423",
  				container: {
					DEFAULT: "#132030",
					low: "#0f1c2c",
					high: "#1e2b3b",
					highest: "#283646"
				}
  			},
  			primary: {
  				DEFAULT: "var(--primary)",
  				foreground: "var(--primary-foreground)"
  			},
  			secondary: {
  				DEFAULT: "var(--secondary)",
  				foreground: "var(--secondary-foreground)"
  			},
  			muted: {
  				DEFAULT: "var(--muted)",
  				foreground: "var(--muted-foreground)"
  			},
  			accent: {
  				DEFAULT: "var(--accent)",
  				foreground: "var(--accent-foreground)"
  			},
  			destructive: {
  				DEFAULT: "var(--destructive)",
  				foreground: "var(--destructive-foreground)"
  			},
  			border: "var(--border)",
  			input: "var(--input)",
  			ring: "var(--ring)"
  		},
  		borderRadius: {
  			lg: "0px",
  			md: "0px",
  			sm: "0px"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
