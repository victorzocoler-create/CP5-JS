import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <Menu />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App