import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// gsap.registerPlugin(useGSAP)

const App = () => {

  const gsapRef = useRef(null)

  useGSAP(() => {

    gsap.to(gsapRef.current, {
      x: 1000,
      duration: 2,
      delay: 1,
      rotate:360
    })

  })

  return (
    <main>
      <div ref={gsapRef} className="box"></div>
    </main>
  )
}

export default App