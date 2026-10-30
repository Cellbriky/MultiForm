export const fontFamily = {
  sans: 'var(--font-ubuntu), sans-serif',
} as const;

export const fontSize = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.75rem', // 28px
  '4xl': '1.875rem', // 30px
  '5xl': '2rem', // 32px
  '6xl': '2.25rem', // 36px
  '7xl': '2.5rem', // 40px
  '8xl': '3rem', // 48px
  '9xl': '3.5rem', // 56px
  '10xl': '4rem', // 64px
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const lineHeight = {
  xs: '1rem', // 16px
  sm: '1.125rem', // 18px
  md: '1.375rem', // 22px
  lg: '1.5rem', // 24px
  xl: '1.625rem', // 26px
  '2xl': '1.75rem', // 28px
  '3xl': '2rem', // 32px
  '4xl': '2.25rem', // 36px
  '5xl': '2.375rem', // 38px
  '6xl': '2.5rem', // 40px
  '7xl': '2.75rem', // 44px
  '8xl': '3rem', // 48px
  '9xl': '3.5rem', // 56px
  '10xl': '4rem', // 64px
  '11xl': '4.5rem', // 72px
} as const;

export const letterSpacing = {
  tightest: '-0.0625rem', // -1px
  tighter: '-0.046875rem', // -0.75px
  tight: '-0.03125rem', // -0.5px
  normal: '0rem',
  loose: '0.0625rem', // 1px
} as const;

export const textTransform = {
  none: 'none',
  uppercase: 'uppercase',
} as const;
