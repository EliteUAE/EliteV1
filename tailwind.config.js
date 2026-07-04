/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			// Deep charcoal enterprise palette
  			void: '#0A0A0D',
  			surface: '#111116',
  			elevated: '#17171E',
  			electric: '#2E63FF',
  			'electric-light': '#5B8CFF',
  			'electric-pale': '#A9C4FF',
  			emerald: '#12B886',
  			'emerald-light': '#3DDC9B',
  			'emerald-pale': '#8FF0C9',
  			platinum: '#F2F3F5',
  			// Legacy compat
  			bone: '#F2F2F7',
  			obsidian: '#121212',
  			cobalt: '#1A44D1',
  			'cobalt-light': '#2B5CE8',
  			ash: '#8A8B93',
  			sand: '#E5E0D8',
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
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			heading: ['Bodoni Moda', 'Georgia', 'serif'],
  			display: ['Bodoni Moda', 'Georgia', 'serif'],
  			body: ['Jost', 'system-ui', 'sans-serif'],
  			sans: ['Jost', 'system-ui', 'sans-serif'],
  			mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			aurora: {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' },
  			},
  			'float-slow': {
  				'0%, 100%': { transform: 'translateY(0px) scale(1)' },
  				'50%': { transform: 'translateY(-24px) scale(1.04)' },
  			},
  			'float-slow2': {
  				'0%, 100%': { transform: 'translateY(0px) scale(1)' },
  				'50%': { transform: 'translateY(-16px) scale(1.02)' },
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' },
  			},
  			'spin-slow': {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' },
  			},
  			marquee: {
  				from: { transform: 'translateX(0)' },
  				to: { transform: 'translateX(-50%)' },
  			},
  			kenBurns: {
  				'0%': { transform: 'scale(1) translate(0,0)' },
  				'100%': { transform: 'scale(1.08) translate(-2%,-1%)' },
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			aurora: 'aurora 12s ease infinite',
  			'float-slow': 'float-slow 8s ease-in-out infinite',
  			'float-slow2': 'float-slow2 10s ease-in-out infinite',
  			shimmer: 'shimmer 3s linear infinite',
  			'spin-slow': 'spin-slow 20s linear infinite',
  			marquee: 'marquee 30s linear infinite',
  			'ken-burns': 'kenBurns 25s ease-in-out infinite alternate',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
