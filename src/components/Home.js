import { useState } from "react"

const Home = () => {
  const [test, setTest] = useState(0)

  return (    
    <>
      Guess the IELTS Word!
      <button onClick={ () => setTest(test + 1) }>test</button>
      <span>{test}</span>
    </>
  )
}

export default Home