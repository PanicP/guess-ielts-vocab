import { useState } from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
  const [test, setTest] = useState(0)

  return (    
    <>
      Guess the IELTS Word!
      <Link to="/choices"> Choices Quiz </Link>
    </>
  )
}

export default HomePage