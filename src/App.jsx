import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Services, Packages, Portfolio, Testimonials, Contact } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Packages />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
