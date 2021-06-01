import { useEffect, useState } from 'react'
import randomObjectKey from 'random-obj-key'
import * as _ from 'lodash'

import wordingListJSON from '../assets/ielts/academic.json'

const ReadinessPage = ({ readiness, setReadiness }) => {
  return (
    <div>
      <div> Are you ready? </div>
      <button onClick={ () => setReadiness(true) }> Go </button>
    </div>
  )
}

const QuestionPage = ({ wordingList }) => {
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState('')

  useEffect(() => {
    const randomProperty = () => {
      const selectedKey = randomObjectKey(wordingList)
      const selectedValue = wordingList[selectedKey]
      const choices = []

      let tempSelectedKey
      let tempSelectValue

      choices.push(selectedValue)
      while(choices.length < 3) {
        tempSelectedKey = randomObjectKey(wordingList)
        tempSelectValue = wordingList[tempSelectedKey]
        if(tempSelectedKey !== selectedKey && !_.includes(choices, tempSelectValue)){
          choices.push(tempSelectValue)
        }
      }

      console.log(selectedKey, selectedValue, choices)
      return 
    }
    setQuestion(randomProperty)
  }, [])
  
  return (
    <div>
      <div>
        score: {score}
      </div>
      <div>
        question
      </div>
      
    </div>
  )
}

const ChoicesPage = () => {
  const [wordingList, setWordingList] = useState([])
  const [readiness, setReadiness] = useState(false)

  useEffect(() => {
    setWordingList( JSON.parse(JSON.stringify(wordingListJSON)) )
  }, [])

  useEffect(() => {
    console.log(wordingList)
  }, [wordingList])

  return (
    <>
      { readiness ? <QuestionPage wordingList={ wordingList }/> : <ReadinessPage setReadiness={ setReadiness } /> }
    </>
  )
}

export default ChoicesPage