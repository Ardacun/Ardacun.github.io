// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    //output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    i18n: { // i18n config
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        localeDetection: false,
    }
};
  
  