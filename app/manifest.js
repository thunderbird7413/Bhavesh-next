export default function manifest() {
    return {
      name: 'MG Overseas – Premium Granite & Natural Stone',
      short_name: 'MG Overseas',
      description: 'MG Overseas offers premium granite and natural stone solutions including Black Granite, Exotic Granite, North Indian Granite, and more.',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#101010',
      orientation: 'portrait',
      lang: 'en-IN',
      icons: [
        {
          src: '/images/image.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/images/image.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    };
  }
  