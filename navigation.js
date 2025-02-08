// navigation.js
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'de', 'it', 'tw', 'ja', 'ko', 'th', 'vi', 'ru', 'es', 'pt', 'ar', 'tr'];

export const localePrefix = 'always'; // Ensures locale is always in the URL

export const { Link, redirect, usePathname, useRouter, useLocale } =
  createSharedPathnamesNavigation({ locales, localePrefix });
