

// function App() {

//   return (
//     <>
//       Hi there this is Abhineet
//     </>
//   )
// }

// export default App
// "use client";
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'
import EmblaCarousel from './EmblaCarousel.jsx'
import WorkshopSection from './WorkshopSection.jsx'
import WhatWeOffer from './WhatWeOffer.jsx'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const topics = [
  {
    "title": "Heading for slide 1",
    "content": "Content for slide 1"
  },
  {
    "title": "Heading for slide 2",
    "content": "Content for slide 2"
  },
  {
    "title": "Heading for slide 3",
    "content": "Content for slide 3"
  },
  {
    "title": "Heading for slide 4",
    "content": "Content for slide 4"
  },
  {
    "title": "Heading for slide 5",
    "content": "Content for slide 5"
  },
  {
    "title": "Heading for slide 6",
    "content": "Content for slide 6"
  }
]
const App = () => (
  <>
    <div style={{fontSize: 40, textAlign: "center"}} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 pb-20
      text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      <b>What We Offer?</b>
    </div>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} topics={topics}/>
    <br />
    <div 
      className="text-center mt-24 text-transparent 
        bg-clip-text bg-gradient-to-r  from-purple-500 via-pink-500 to-cyan-400 
        font-bold text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
      "
    > 
      Academic Workshops and Sessions
    </div>

    <WorkshopSection />
  </>
)

export default App