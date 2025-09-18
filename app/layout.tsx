import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { initGA } from '@/lib/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'BobCoperation - EPP y Consumibles Industriales',
    template: '%s | BobCoperation'
  },
  description: 'EPP y consumibles industriales con cumplimiento y entrega a tiempo. Abasto confiable para empresas, maquila y almacenes.',
  keywords: ['EPP', 'equipos protección personal', 'consumibles industriales', 'guantes industriales', 'calzado seguridad', 'bobcoperation'],
  authors: [{ name: 'BobCoperation' }],
  creator: 'BobCoperation',
  publisher: 'BobCoperation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://bobcoperation.com',
    title: 'BobCoperation - EPP y Consumibles Industriales',
    description: 'EPP y consumibles industriales con cumplimiento y entrega a tiempo. Abasto confiable para empresas, maquila y almacenes.',
    siteName: 'BobCoperation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BobCoperation - EPP y Consumibles Industriales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BobCoperation - EPP y Consumibles Industriales',
    description: 'EPP y consumibles industriales con cumplimiento y entrega a tiempo. Abasto confiable para empresas, maquila y almacenes.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <head>
        {/* Google Analytics - Temporarily disabled for deployment */}
        {/* {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href
                  });
                `,
              }}
            />
          </>
        )} */}
        
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta tags adicionales */}
        <meta name="theme-color" content="#0B0B0B" />
        <meta name="msapplication-TileColor" content="#0B0B0B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip link para accesibilidad */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Breadcrumbs */}
        <Breadcrumb />
        
        {/* Contenido principal */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scripts adicionales */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Inicializar GA4
              if (typeof window !== 'undefined') {
                ${initGA.toString()}();
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
