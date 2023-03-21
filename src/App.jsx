import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Loader from './components/Loader'

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  })

  return (
    <div>
      <Header />
      {
        isLoading ? (<Loader />) 
        :
        <div> 
          <Main /><Footer />
        </div>
      }
      
    </div>
  )
}

