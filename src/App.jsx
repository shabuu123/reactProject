import './App.css'
import { Contact } from './components/contact'
import { Form } from './components/form'
import { About } from './components/about'
function App() {

  return (
    <>
    <Form/>
    <About image = "about.jpg"
    para = "ABOUT"
    heading = "We're Passionate About Delivering Growth Service"
    paragraph = "Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time"
    listItems = {["Everything we recommend has direct positive impact", "You will become an important partner of our company"]}/>

    <Contact/>
    </>
  )
}

export default App
