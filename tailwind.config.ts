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
				},
				// KLEAR KARMA CHAKRA COLORS
				chakra: {
					root: 'hsl(var(--chakra-root))',
					sacral: 'hsl(var(--chakra-sacral))',
					solar: 'hsl(var(--chakra-solar))',
					heart: 'hsl(var(--chakra-heart))',
					throat: 'hsl(var(--chakra-throat))',
					'third-eye': 'hsl(var(--chakra-third-eye))',
					crown: 'hsl(var(--chakra-crown))'
				},
				// THEME COLORS
				'bg-glass': 'hsl(var(--bg-glass))',
				'bg-glass-dark': 'hsl(var(--bg-glass-dark))',
				'text-tertiary': 'hsl(var(--text-tertiary))',
				'border-accent': 'hsl(var(--border-accent))'
			},
			fontFamily: {
				primary: 'var(--font-primary)',
				display: 'var(--font-display)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
				'144': '36rem'
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'primary': 'var(--shadow-primary)',
				'secondary': 'var(--shadow-secondary)',
				'accent': 'var(--shadow-accent)'
			},
			backgroundImage: {
				'gradient-healing': 'linear-gradient(135deg, hsl(var(--chakra-heart)), hsl(var(--chakra-crown)), hsl(var(--chakra-solar)))',
				'gradient-trust': 'linear-gradient(135deg, hsl(var(--chakra-throat)), hsl(var(--chakra-third-eye)))',
				'gradient-transformation': 'linear-gradient(135deg, hsl(var(--chakra-heart)), hsl(var(--chakra-throat)))',
				'gradient-radial': 'radial-gradient(ellipse at center, hsl(var(--chakra-heart) / 0.1) 0%, transparent 70%)',
				'chakra-gradient': 'linear-gradient(135deg, hsl(var(--chakra-root)) 0%, hsl(var(--chakra-sacral)) 14.3%, hsl(var(--chakra-solar)) 28.6%, hsl(var(--chakra-heart)) 42.9%, hsl(var(--chakra-throat)) 57.1%, hsl(var(--chakra-third-eye)) 71.4%, hsl(var(--chakra-crown)) 85.7%, hsl(var(--chakra-root)) 100%)'
			},
			backdropBlur: {
				glass: '20px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
