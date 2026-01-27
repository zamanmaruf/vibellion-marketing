import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--text))",
  			card: {
  				DEFAULT: "hsl(var(--surface))",
  				foreground: "hsl(var(--text))",
  			},
  			popover: {
  				DEFAULT: "hsl(var(--surface))",
  				foreground: "hsl(var(--text))",
  			},
			primary: {
				DEFAULT: "#F0F8FF",
				foreground: "hsl(var(--background))",
			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--text))",
  			},
  			muted: {
  				DEFAULT: "hsl(var(--input))",
  				foreground: "hsl(var(--text) / 0.7)",
  			},
  			accent: {
  				DEFAULT: "hsl(var(--primary) / 0.1)",
  				foreground: "hsl(var(--text))",
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--text))",
  			},
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			surface: "hsl(var(--surface))",
  			text: "hsl(var(--text))",
			khaki: "#F0F8FF",
			olive: "#F0F8FF",
			"frost-white": "#F0F8FF",
			frost: {
				DEFAULT: "#F0F8FF",
			},
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)",
  			"2xl": "1rem",
  		},
  		fontFamily: {
  			serif: [
  				'var(--font-serif)',
  				'serif'
  			],
  			sans: [
  				'var(--font-sans)',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};

export default config;
