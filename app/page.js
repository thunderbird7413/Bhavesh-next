import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ProductSection from '../components/ProductSection'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Carousel />
        <ProductSection />
        <Stats />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  )
} 