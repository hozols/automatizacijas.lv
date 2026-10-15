
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
				smoke: 'hsl(var(--smoke))',
				ash: 'hsl(var(--ash))',
				sand: 'hsl(var(--sand))',
				forest: 'hsl(var(--forest))',
				iris: 'hsl(var(--iris))',
				slate: 'hsl(var(--slate))',
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
				/* 8 / 12 / 16 / 24: nothing below 8px on a component */
				DEFAULT: '8px',
				sm: '8px',
				md: '8px',
				lg: '8px',
				xl: '12px',
				'2xl': '16px',
				'3xl': '24px'
			},
			boxShadow: {
				/* the system is flat: every shadow utility is the one subtle shadow */
				sm: 'var(--shadow-subtle)',
				DEFAULT: 'var(--shadow-subtle)',
				md: 'var(--shadow-subtle)',
				lg: 'var(--shadow-subtle)',
				xl: 'var(--shadow-subtle)',
				'2xl': 'var(--shadow-subtle)'
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
				sans: ['"Inter Variable"', '"Inter Fallback"', 'system-ui', 'sans-serif'],
				display: ['"Inter Variable"', '"Inter Fallback"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
				inter: ['"Inter Variable"', '"Inter Fallback"', 'system-ui', 'sans-serif']
			},
			letterSpacing: {
				tighter: '-0.025em',
				tight: '-0.01em'
			},
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate")
	],
} satisfies Config;
