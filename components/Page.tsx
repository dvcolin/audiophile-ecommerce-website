import Head from 'next/head';

import type { Seo } from '@/hygraph/sdk';

type PageProps = Omit<Seo, 'id' | 'stage'> & {
  children: React.ReactNode;
};

export default function Page({ title, description, children }: PageProps) {
  const pageTitle = `Audiophile | ${title}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
      </Head>
      {children}
    </>
  );
}
