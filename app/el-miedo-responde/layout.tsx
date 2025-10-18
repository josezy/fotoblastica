import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Miedo Responde - Fotoblástica Negativa',
  description: 'Escucha "El Miedo Responde" de Fotoblástica Negativa. Disponible en Spotify, Apple Music, YouTube, Deezer y más plataformas.',
  openGraph: {
    type: 'music.song',
    locale: 'es_CO',
    title: 'El Miedo Responde - Fotoblástica Negativa',
    description: 'Escucha "El Miedo Responde" en todas las plataformas digitales.',
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 1200,
        alt: 'El Miedo Responde - Fotoblástica Negativa Cover Art'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Miedo Responde - Fotoblástica Negativa',
    description: 'Escucha "El Miedo Responde" en todas las plataformas digitales.',
    images: ['/cover.png']
  }
}

export default function ElMiedoRespondeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
