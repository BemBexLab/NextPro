/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        "inter": "var(--inter)",
        "plus-jakarta-sans": "var(--plus-jakarta-sans)",
        "dm-sans": "var(--dm-sans)"
      },
      fontSize: {
        "7.5xl": "75px",
        "5.5xl": "50px",
        "4.5xl": "40px",
        "1xl": "22px"
      },
      spacing: {
        "2.5": "10px",
        "3.5": "15px",
        "4.5": "18px",
        "7.5": "30px",
        "12.5": "50px",
        "15": "60px",
        "25": "100px"
      },
      boxShadow: {
        "3xl": "0px 14px 21px 0px rgba(58, 66, 89, 0.05)",
        "4xl": "0px 0px 8px 0px rgba(0, 0, 0, 0.15)"
      },
      dropShadow: {
        "3xl": "0 4px 50px rgba(0, 0, 0, 0.15)",
        "4xl": "0 0px 20px rgba(0, 31, 63, 0.15)"
      },
      backgroundImage: {
        "background-linear": "var(--background-linear)"
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        green: {
          DEFAULT: "var(--green)"
        },
        red: {
          DEFAULT: "var(--red)"
        },
        purple: {
          DEFAULT: "var(--purple)"
        },
        gray: {
          DEFAULT: "var(--gray)"
        },

      },
      borderRadius: {
        "2.5xl": "20px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "custom-cussor": {
          from: {
            width: "0",
            height: "0",
            opacity: "1"
          },
          to: {
            width: "100%",
            height: "100%",
            opacity: "0",
          }
        },
        "slideDown": {
          from: { transform: " translateY(-100%)" },
          to: { transform: "translateY(0)" }
        },
        "spring": {
          "0%": {
            transform: "scale(0.2, 0.2)",
            opacity: "0"
          },
          "50%": {
            opacity: "0.9"
          },
          "100%": {
            transform: "scale(0.9, 0.9)",
            opacity: "0"
          }
        },
        "up-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-16px)" },
        },
        "left-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-15px)" },
        },
        // NEW: shake-pause for 1s shake, 1s pause, shake is now faster
        "shake-pause": {
          "0%, 100%": { transform: "translateX(0)" },
          "5%, 15%, 25%, 35%": { transform: "translateX(-8px)" },
          "10%, 20%, 30%, 40%": { transform: "translateX(8px)" },
          "41%, 100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        "spring-one": "spring 3s ease-in-out 0s infinite",
        "spring-two": "spring 3s ease-in-out 1s infinite",
        "spring-three": "spring 3s ease-in-out 2s infinite",
        "slideDown": "slideDown 0.35s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "custom-cussor": "custom-cussor 2s ease-out 0.5s infinite",
        "up-down": "up-down 1.1s infinite alternate",
        "left-right": "left-right 1.1s infinite alternate",
        // Use this for 1s fast shake, 1s pause
        "shake-pause": "shake-pause 2s cubic-bezier(.36,.07,.19,.97) infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
