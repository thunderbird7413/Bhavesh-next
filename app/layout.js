import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MG Overseas | Premium Natural Stone Supplier',
  description: 'Welcome to MG Overseas – your trusted supplier of premium granite and natural stone across India and abroad.',
  keywords: 'granite supplier, MG Overseas, natural stone India, home decor stone, granite slabs',
  openGraph: {
    title: 'MG Overseas | Premium Natural Stone Supplier',
    description: 'Top-quality granite for architecture, interiors, and exteriors.',
    url: 'https://www.mgoverseasgroup.com/',
    images: [
      {
        url: 'https://www.mgoverseasgroup.com/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'MG Overseas Granite Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MG Overseas | Premium Natural Stone Supplier',
    description: 'Explore the world of premium granite with MG Overseas.',
    images: ['https://www.mgoverseasgroup.com/images/og-home.jpg'],
  },
  metadataBase: new URL('https://www.mgoverseasgroup.com'),
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.mgoverseasgroup.com/" />
      </head>
      <body className={inter.className}>
        <div id="root">{children}</div>
        <WhatsAppButton />
      </body>
    </html>
  );
}