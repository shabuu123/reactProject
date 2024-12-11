import './App.css'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Form } from './components/form'
import { About } from './components/about'
import { Hexagon } from './components/hexagon'
function App() {

  return (
    <>
      <Form />
      <About image="about.jpg"
        para="ABOUT"
        heading="We're Passionate About Delivering Growth Service"
        paragraph="Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time"
        listItems={["Everything we recommend has direct positive impact", "You will become an important partner of our company"]} />

      <Contact />
      <Footer />
      <div className='hexagon-div'>
        <Hexagon
          svg={
            <svg className='hexagonSvg' width="100" height="100" viewBox="0 0 150 150">
              <polygon points="75,10 130,45 130,105 75,140 20,105 20,45" fill="#2ed4ae" />
              <g fill="white">
                <rect x="52" y="50" width="12" height="40" rx="2" ry="2" />
                <rect x="86" y="50" width="12" height="40" rx="2" ry="2" />
                <rect x="68" y="55" width="14" height="20" rx="2" ry="2" />
                <circle cx="58" cy="50" r="4" />
                <circle cx="92" cy="50" r="4" />
              </g>
            </svg>
          }
           h2="Environment Analysis"

          p="The starting point of any success story is knowing your current position in the business environment"
        />
        <Hexagon
          svg={
          <svg className='hexagonSvg' width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" fill="#1AC6A9" />

            <rect x="30" y="30" width="40" height="5" fill="#ffffff" rx="2" />
            <rect x="30" y="42" width="40" height="5" fill="#ffffff" rx="2" />
            <rect x="30" y="54" width="40" height="5" fill="#ffffff" rx="2" />
            <circle cx="20" cy="32.5" r="2.5" fill="#ffffff" />
            <circle cx="20" cy="44.5" r="2.5" fill="#ffffff" />
            <circle cx="20" cy="56.5" r="2.5" fill="#ffffff" />
          </svg>
          }
          h2="Development Planning"
          p="After completing the environmental analysis the next stage is to design and plan your development strategy"
        />
        <Hexagon
          svg={
          <svg className='hexagonSvg' width="100" height="100" viewBox="-100 -100 200 200">

            <polygon points="86.6,-50 86.6,50 0,100 -86.6,50 -86.6,-50 0,-100" fill="#25cfa5" />
            <g transform="scale(0.6)">
              <circle cx="0" cy="0" r="50" fill="white" />
              <path d="M 0 0 L 50 0 A 50 50 0 0 1 25 -43 Z" fill="#25cfa5" />
              <path d="M 0 0 L 50 0 Z" fill="white" />
            </g>
          </svg>

          }
          h2="Execution & Evaluation"
          p="In this phase you will focus on executing the actions plan and evaluating the results after each marketing campaign" />
      </div>
    </>
  )
}



export default App
