import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Define supported locales
const locales = ['en', 'fr', 'de', 'it', 'tw', 'ja', 'ko', 'th', 'vi', 'ru', 'es', 'pt', 'ar', 'tr'];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` is supported
    if (!locales.includes(locale)) notFound();

    return {
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});
