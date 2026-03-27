import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className='h-[60vh]'>d</div>
      <Footer/>
    </>
  )
}

export default App
