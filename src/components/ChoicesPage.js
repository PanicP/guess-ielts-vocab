import { useEffect, useState } from 'react'
import randomObjectKey from 'random-obj-key'
import _ from 'lodash'

import wordingListJSON from '../assets/ielts/academic.json'
import styled from 'styled-components'

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
  const [question, setQuestion] = useState([])
  const [questionNumber, setQuestionNumber] = useState(1)

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
      // console.log(selectedKey, selectedValue, choices)
      return {
        selectedKey,
        selectedValue,
        choices: _.shuffle(choices)
      }
    }

    setQuestion(randomProperty)
  }, [questionNumber])

  useEffect(() => {
    console.log('question', question)
  }, [question])

  const checkCorrection = ({ choice }) => {
    if(choice === _.get(question, ['selectedValue'])) {
      setScore( score + 1 )
    }

    setQuestionNumber(questionNumber + 1)
  }
  
  return (
    <div>
      <div>
        score: {score}/{questionNumber - 1}
      </div>
      <div>
        Question {questionNumber}: {_.get(question, ['selectedKey'])} 
      </div>
      <div>
        {
          _.get(question, ['choices'], []).map((choice, index) => (
            <Choices onClick={() => checkCorrection({ choice })}>
              {index + 1}. {choice}
            </Choices>
          ))
        }
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

const Choices = styled.div`
  margin-top: 1em;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
` 