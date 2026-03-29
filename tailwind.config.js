/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:        '#FAFAF8',
        surface:           '#FFFFFF',
        surfaceLow:        '#F2F4F2',
        surfaceContainer:  '#EBEFEC',
        primary:           '#1A1A1A',
        onPrimary:         '#FFFFFF',
        secondary:         '#3A684D',
        secondaryDim:      '#2E5C41',
        onSecondary:       '#FFFFFF',
        tertiary:          '#C8870A',
        tertiaryContainer: '#FDF3DC',
        onTertiary:        '#7A4F00',
        textPrimary:       '#1A1A1A',
        textSecondary:     '#5A5A5A',
        textMuted:         '#9B9B9B',
        textDisabled:      '#C4C4C4',
        outlineVariant:    'rgba(90,90,90,0.20)',
        danger:            '#C0392B',
        dangerLight:       '#FDECEA',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '16px',
        xl:   '20px',
        '2xl':'24px',
        full: '9999px',
      },
      boxShadow: {
        ambient: '0 12px 40px rgba(45, 52, 50, 0.06)',
        none:    'none',
      },
    },
  },
  plugins: [],
}
