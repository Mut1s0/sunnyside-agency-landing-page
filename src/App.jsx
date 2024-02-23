import { Features, Footer, Gallery, Hero, Navigation, Services, Testimonials } from "./components"

function App() {
  return (

    <main>

      <div>

        <header className="min-h-dvh">

          <Navigation />

          <Hero />

        </header>

        <Features />
        
        <Services />

        <Testimonials />

        <Gallery />

        <Footer />

      </div>

    </main>
    
  )
}

export default App;