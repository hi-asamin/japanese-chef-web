import React from 'react';
import Head from 'next/head';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const {
    children,
    title = 'NigiriNomads',
    description = '日本の伝統と世界の舞台へのパスポート。',
  } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <main className="container mx-auto mt-6 mb-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
