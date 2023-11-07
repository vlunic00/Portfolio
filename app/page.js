'use client'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function Home(){
  return(
    <>
    <div className="bg-primary h-screen px-10">
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default Home