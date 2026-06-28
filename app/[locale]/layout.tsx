import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import '../globals.css';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale });

  return {
    title: 'ToolVerse - Student Tools Directory',
    description: t('home.hero_subtitle'),
  };
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
