import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all supported locales
    locales: ['en', 'fr', 'de', 'it', 'tw', 'ja', 'ko', 'th', 'vi', 'ru', 'es', 'pt', 'ar', 'tr'],
    // Default locale if none is specified
    defaultLocale: 'en',
});

export const config = {
    matcher: [
      // Catch everything except requests for:
      // - next internals
      // - api routes
      // - favicon, and public assets (like /flags)
      '/((?!api|_next/static|_next/image|favicon.ico|flags|assets).*)',
    ],
  };
   
