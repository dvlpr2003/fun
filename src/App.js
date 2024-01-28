import { useState } from "react";
import "./App.css";
const quiz = [
  {
    question:"What is so fragile it breaks even when mentioned?",
    answer:"Silence",

  },
  {
    question:"What word only consists of one letter and has an “e” at the beginning and end? ",
    answer:" An envelope",

  }, 
  {
    question:" I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I? ",
    answer:"Fire",

  },
]

const App = () => {
  return (
    <>
    <Content />
    </>
  )
}
function Content(){
  return(
    <div id="container-main">
      {quiz.map((e,i) => <Element answer = {e.answer} question={e.question} number = {i} />)}

    </div>
  )
}
function Element({answer,question,number}){
  const [value,setValue]=useState(false)

  function changeValue(){
    setValue((value)=>!value)

  }
  return(
    <div>
      <div className="question" onClick={changeValue} style={{cursor:"pointer"}}>
        <Question number = {number} question={question} changeValue={changeValue} value={value}/>
      </div>
      <div style={value? {display:'none'}:{display:"block"}}>
        <Answer answer={answer}/>
      </div>

    </div>
  )

}
function Question({number,question,changeValue,value}){
  return (
    <>
    <span>0{number}</span>
    <span>{question}</span>
    <span onClick={changeValue}>{value?"+":"-"}</span>
    </>
  )
}
function Answer({answer}){
  return (
    <span>
      {answer}
    </span>
  )
}
export default App;