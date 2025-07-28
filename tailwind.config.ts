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
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// === APPLE iOS 26 TAHOE COLOR SYSTEM ===
				// Primary Colors - Heart Chakra (Healing Focus)
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				
				// Accent Colors - Crown Chakra (Spiritual Connection)
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					light: 'hsl(var(--accent-light))',
					dark: 'hsl(var(--accent-dark))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				
				// Tertiary Colors - Throat Chakra (Communication)
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					light: 'hsl(var(--tertiary-light))',
					dark: 'hsl(var(--tertiary-dark))',
					foreground: 'hsl(var(--tertiary-foreground))'
				},
				
				// Legacy Shadcn/UI Colors
				secondary: {
					DEFAULT: 'hsl(var(--bg-tertiary))',
					foreground: 'hsl(var(--text-primary))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--error))',
					foreground: 'hsl(var(--text-primary))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
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
				// === KLEAR KARMA CHAKRA COLORS ===
				chakra: {
					root: {
						DEFAULT: 'hsl(var(--chakra-root))',
						light: 'hsl(var(--chakra-root-light))',
						dark: 'hsl(var(--chakra-root-dark))'
					},
					sacral: {
						DEFAULT: 'hsl(var(--chakra-sacral))',
						light: 'hsl(var(--chakra-sacral-light))',
						dark: 'hsl(var(--chakra-sacral-dark))'
					},
					solar: {
						DEFAULT: 'hsl(var(--chakra-solar))',
						light: 'hsl(var(--chakra-solar-light))',
						dark: 'hsl(var(--chakra-solar-dark))'
					},
					heart: {
						DEFAULT: 'hsl(var(--chakra-heart))',
						light: 'hsl(var(--chakra-heart-light))',
						dark: 'hsl(var(--chakra-heart-dark))'
					},
					throat: {
						DEFAULT: 'hsl(var(--chakra-throat))',
						light: 'hsl(var(--chakra-throat-light))',
						dark: 'hsl(var(--chakra-throat-dark))'
					},
					'third-eye': {
						DEFAULT: 'hsl(var(--chakra-third-eye))',
						light: 'hsl(var(--chakra-third-eye-light))',
						dark: 'hsl(var(--chakra-third-eye-dark))'
					},
					crown: {
						DEFAULT: 'hsl(var(--chakra-crown))',
						light: 'hsl(var(--chakra-crown-light))',
						dark: 'hsl(var(--chakra-crown-dark))'
					}
				},
				
				// === LIQUID GLASS SYSTEM ===
				glass: {
					DEFAULT: 'hsl(var(--bg-glass))',
					light: 'hsl(var(--bg-glass-light))',
					subtle: 'hsl(var(--bg-glass-subtle))',
					nav: 'hsl(var(--bg-glass-nav))'
				},
				
				// === SEMANTIC COLORS ===
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				error: 'hsl(var(--error))',
				info: 'hsl(var(--info))',
				
				// === TEXT HIERARCHY ===
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					tertiary: 'hsl(var(--text-tertiary))',
					muted: 'hsl(var(--text-muted))',
					inverse: 'hsl(var(--text-inverse))'
				},
				
				// === BORDER SYSTEM ===
				border: {
					DEFAULT: 'hsl(var(--border-primary))',
					secondary: 'hsl(var(--border-secondary))',
					subtle: 'hsl(var(--border-subtle))',
					accent: 'hsl(var(--border-accent))'
				}
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
				'gradient-healing': 'linear-gradient(135deg, hsl(var(--chakra-crown)), hsl(var(--chakra-root)), hsl(var(--chakra-solar)))',
				'gradient-trust': 'linear-gradient(135deg, hsl(var(--chakra-throat)), hsl(var(--chakra-third-eye)))',
				'gradient-transformation': 'linear-gradient(135deg, hsl(var(--chakra-crown)), hsl(var(--chakra-throat)))',
				'gradient-radial': 'radial-gradient(ellipse at center, hsl(var(--chakra-crown) / 0.1) 0%, transparent 70%)',
				'chakra-gradient': 'linear-gradient(135deg, hsl(var(--chakra-root)) 0%, hsl(var(--chakra-sacral)) 14.3%, hsl(var(--chakra-solar)) 28.6%, hsl(var(--chakra-crown)) 42.9%, hsl(var(--chakra-throat)) 57.1%, hsl(var(--chakra-third-eye)) 71.4%, hsl(var(--chakra-crown)) 85.7%, hsl(var(--chakra-root)) 100%)'
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
