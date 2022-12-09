import Head from 'next/head';

import type { Seo as SeoType } from '@/hygraph/sdk';

export interface SeoProps {
  seo: Omit<SeoType, 'id' | 'stage'>;
}

export default function Seo({ seo }: SeoProps) {
  const pageTitle = `Audiophile | ${seo.title}`;
  return (
    <Head>
      <title>{pageTitle}</title>
      {seo.description && <meta name="description" content={seo.description} />}
      <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
    </Head>
  );
}
