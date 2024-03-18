

import { useEffect, useReducer } from 'react';
import Header from './components/Header/header';
import Main from './components/main/Main';
import Loader from './components/loader/loader';
import Error from './components/error/error';
import StartScreen from './components/startscreen/StartScreen';
import Question from './components/question/Question';
import NextButton from './components/nextbutton/NextButton';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
}

function reducer(state, action) {
  switch (action.type) { 
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      }
    case 'dataFailed':
      return {
        ...state,
        status: "error",
      }
    case 'start':
      return {
        ...state,
        status: 'active',
      }
    case 'newAnswer':
      const question = state.questions.at(state.index)
      
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption
          ? state.point + 1
          : state.points,
      }
    
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    
    default:
      throw new Error("Action unknown");
  }
}


function App() {

  const [{ questions, status, index, answer }, dispatch] = useReducer(reducer, initialState)
  
  const numQuestions = questions.length

  useEffect(function(){
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data}))
      .catch((err) => dispatch({type: "dataFailed"}))
  }, [])

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
        
      </Main>
      
    </div>
  );
}

export default App;
