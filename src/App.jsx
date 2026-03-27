import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className='h-[60vh] flex items-center justify-center'>
        <Hero />
      </div>
      <Footer/>
    </>
  )
}

export default App
