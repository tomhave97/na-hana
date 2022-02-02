const colors = {
  primary: "#36BCFF",
  purple: {
    500: "#18568F",
    DEFAULT: "#18568F",
  },
  pink: {
    500: "#E70AAA",
    DEFAULT: "#E70AAA",
  },
  green: {
    500: "#1BB55C",
    DEFAULT: "#1BB55C",
  },
  brown: {
    500: "#9D5F5F",
    DEFAULT: "#9D5F5F",
  },
  yellow: {
    500: "#FFBB12",
    DEFAULT: "#FFBB12",
  },
  gray: {
    transparent: "rgba(179, 180, 182, 0.6); backdrop-filter: blur(4px);",
    300: "#C1C1C3",
    400: "#B6B6B9",
    500: "#9A9A9E",
    DEFAULT: "#9A9A9E",
  },
  red: {
    400: "#EB6A5C",
    500: "#E74C3C",
    DEFAULT: "#E74C3C",
  }
};

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors,
      gridTemplateColumns: {
        '32': 'repeat(32, minmax(0, 1fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
