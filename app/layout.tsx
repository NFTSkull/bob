import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
  metadataBase: new URL('https://bob-chi-bice.vercel.app'),
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
    url: 'https://bob-chi-bice.vercel.app',
    siteName: 'BobCoperation',
    title: 'BobCoperation - EPP y Consumibles Industriales',
    description: 'EPP y consumibles industriales con cumplimiento y entrega a tiempo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BobCoperation - EPP y Consumibles Industriales',
    description: 'EPP y consumibles industriales con cumplimiento y entrega a tiempo.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <head>
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}