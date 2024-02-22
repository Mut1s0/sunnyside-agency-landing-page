import { Features, Footer, Gallery, Hero, Navigation, Services, Testimonials } from "./components"

function App() {
  return (

    <main>

      <div>

        <header className="min-h-dvh">

          <Navigation />

          <Hero />

        </header>

        <section>

          <Features />

        </section>

        <section>

          <Services />

        </section>

        <section>

          <Testimonials />

        </section>

        <section>

          <Gallery />

        </section>

        <footer>

          <Footer />

        </footer>

      </div>

    </main>
    
  )
}

export default App;