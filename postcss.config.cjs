// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // PostCSS plugin الخاص بـ Tailwind v4
    autoprefixer: {},            // لإنشاء vendor prefixes أوتوماتيكياً
  }
}
