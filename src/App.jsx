import styles from "./style"
import { Navbar, Hero, Business, Testimonials, CardDeal, Clients, CTA, Billing, Footer, Stats } from "./components"
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`text-white ${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`text-white ${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App