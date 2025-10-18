import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fotoblástica Negativa | Banda de Rock - Rionegro, Antioquia',
  description: 'Banda de rock nacida en Rionegro, Antioquia en agosto de 2022. Nuestro nombre proviene del fotoblastismo negativo, un fenómeno en el que ciertas semillas solo germinan en la oscuridad.',
  keywords: ['Fotoblástica Negativa', 'banda de rock', 'rock colombiano', 'Rionegro', 'Antioquia', 'música rock', 'El Miedo Responde'],
  authors: [{ name: 'Fotoblástica Negativa' }],
  creator: 'Fotoblástica Negativa',
  publisher: 'Fotoblástica Negativa',
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://fotoblasticanegativa.com',
    siteName: 'Fotoblástica Negativa',
    title: 'Fotoblástica Negativa | Banda de Rock',
    description: 'Banda de rock nacida en Rionegro, Antioquia. Una esencia tan oscura como poderosa.',
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 1200,
        alt: 'Fotoblástica Negativa - El Miedo Responde'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotoblástica Negativa | Banda de Rock',
    description: 'Banda de rock nacida en Rionegro, Antioquia. Una esencia tan oscura como poderosa.',
    images: ['/cover.png']
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
