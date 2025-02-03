// next-i18next.config.js
module.exports = {
    i18n: {
      defaultLocale: 'en', // Default language
      locales: ['en', 'fr', 'ar'], // Supported languages (add more if needed)
    },
    react: {
      useSuspense: false, // Disable suspense to avoid rendering issues
    },
  };
  