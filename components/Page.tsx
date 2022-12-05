import Head from 'next/head';

interface PageProps {
  title: string;
  description: string | null;
  children: React.ReactNode;
}

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
