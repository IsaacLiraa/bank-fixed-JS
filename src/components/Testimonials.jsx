import { people01, people02, people03, quotes } from '../assets'
import { feedback } from '../constants'
import styles, { layout } from '../style'
import FeedbackCard from './FeedBackCard'

const Testimonials = () => {
  return (
    <section id='testimonials' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full md:flex-row sm:mb-16 mb-6 flex flex-row flex-1 items-center">
        <h2 className={`${styles.heading2}`}>
        What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
          anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
          {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  )
}

export default Testimonials