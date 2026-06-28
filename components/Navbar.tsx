import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Navbar() {
  const t = useTranslations();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ToolVerse
            </div>
          </Link>

          <div className="hidden space-x-8 md:flex">
            <Link
              href="/tools"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {t('nav.tools')}
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {t('nav.categories')}
            </Link>
            <Link
              href="/cpge"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {t('nav.cpge')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {t('nav.login')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
