import { useState } from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
  const [test, setTest] = useState(0)

  return (    
    <>
      Guess the IELTS Word!
      <button onClick={ () => setTest(test + 1) }>test</button>
      <span>{test}</span>
      <Link to="/choices"> Choices Quiz</Link>
    </>
  )
}

export default HomePage