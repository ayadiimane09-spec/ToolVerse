import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-32 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t('home.hero_title')}
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              {t('home.hero_subtitle')}
            </p>
            <Link
              href="/tools"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              {t('home.explore_tools')}
            </Link>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">
              {t('home.categories')}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Category cards will be populated here */}
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                <div className="text-4xl mb-2">🤖</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t('categories.ai')}
                </h3>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                <div className="text-4xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t('categories.revision')}
                </h3>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                <div className="text-4xl mb-2">📝</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t('categories.notes')}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
