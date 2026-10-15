
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cosmic: {
					/* legacy names from the old theme, mapped onto the current palette */
					dark: 'hsl(var(--foreground))',
					darker: 'hsl(var(--foreground))',
					light: 'hsl(var(--muted))',
					accent: 'hsl(var(--primary))',
					muted: 'hsl(var(--muted-foreground))',
				},
				ink: {
					DEFAULT: 'hsl(var(--ink))',
					foreground: 'hsl(var(--ink-foreground))',
					muted: 'hsl(var(--ink-muted))',
					rule: 'hsl(var(--ink-rule))'
				},
				marker: 'hsl(var(--marker))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'var(--radius)',
				sm: '2px',
				xl: '6px',
				'2xl': '8px',
				'3xl': '10px'
			},
			boxShadow: {
				sm: '0 1px 0 hsl(225 41% 18% / 0.06)',
				DEFAULT: '0 1px 0 hsl(225 41% 18% / 0.06), 0 6px 16px -12px hsl(225 41% 18% / 0.3)',
				md: '0 1px 0 hsl(225 41% 18% / 0.06), 0 10px 24px -16px hsl(225 41% 18% / 0.3)',
				lg: '0 1px 0 hsl(225 41% 18% / 0.06), 0 14px 32px -20px hsl(225 41% 18% / 0.35)',
				xl: '0 1px 0 hsl(225 41% 18% / 0.06), 0 18px 40px -24px hsl(225 41% 18% / 0.35)',
				'2xl': '0 1px 0 hsl(225 41% 18% / 0.06), 0 24px 48px -28px hsl(225 41% 18% / 0.4)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontFamily: {
				sans: ['"Sofia Sans Variable"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
				display: ['"Sofia Sans Extra Condensed Variable"', '"Arial Narrow"', '"Helvetica Neue"', 'sans-serif'],
				inter: ['"Sofia Sans Variable"', '"Helvetica Neue"', 'Arial', 'sans-serif']
			},
			letterSpacing: {
				/* the old theme tightened every heading; the condensed face needs none */
				tighter: '0',
				tight: '0'
			},
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate")
	],
} satisfies Config;
