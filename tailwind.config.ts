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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'gradient-shift': 'gradient 8s linear infinite',
  			'grid': 'grid 20s linear infinite',
  			'float': 'float 6s ease-in-out infinite',
  			'shimmer': 'shimmer 2s linear infinite',
  			'spotlight': 'spotlight 2s ease-in-out infinite',
  		},
  		keyframes: {
  			gradient: {
  				'0%, 100%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  			},
  			grid: {
  				'0%': { transform: 'translateY(0)' },
  				'100%': { transform: 'translateY(-100%)' },
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '200% 0' },
  				'100%': { backgroundPosition: '-200% 0' },
  			},
  			spotlight: {
  				'0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
  				'50%': { opacity: '0.5', transform: 'scale(1.05)' },
  			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
