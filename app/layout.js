import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Granite Products | Premium Stone Collection | MG Overseas',
  description:
    'Discover top-quality granite products at MG Overseas. From Premium Granite to Exotic and North Indian varieties, explore natural stones perfect for flooring, kitchen tops, and architecture.',
  keywords:
    'granite, premium granite, black granite, exotic granite, north indian granite, granite slabs, natural stone, stone supplier India, MG Overseas',
  openGraph: {
    title: 'Granite Products | MG Overseas',
    description:
      'Browse our curated collection of premium granite: Black, Exotic, and North Indian Granite. Trusted by architects and builders across India and abroad.',
    url: 'https://www.mgoverseasgroup.com/products',
    siteName: 'MG Overseas',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.mgoverseasgroup.com/images/products-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Granite Slabs and Natural Stone Collection by MG Overseas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Granite Products | MG Overseas',
    description:
      'Explore the finest granite slabs and natural stones at MG Overseas — ideal for homes, hotels, and commercial spaces.',
    images: ['https://www.mgoverseasgroup.com/images/products-og.jpg'],
    site: '@mgoverseas',
  },
  metadataBase: new URL('https://www.mgoverseasgroup.com'),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  )
} 