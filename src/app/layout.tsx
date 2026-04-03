import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'More Leads · Marketing Medical pentru Clinici și Medici din România',
  description: 'Construim sisteme complete de generare a pacienților pentru clinici și medici din România. Campanii Meta & Google, landing pages, CRM. Prima lună gratuită.',
  keywords: 'marketing medical, generare pacienti, clinici romania, medici romania, meta ads medical, google ads clinica',
  openGraph: {
    title: 'More Leads · Marketing Medical România',
    description: 'Prima lună de colaborare — gratuită. Sistem complet de generare a pacienților.',
    url: 'https://moreleads.ro',
    siteName: 'More Leads',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
