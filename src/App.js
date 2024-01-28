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
  const [value,setValue]=useState(null)
  


  return(
    <div id="container-main">
      {quiz.map((e,i) => <Element answer = {e.answer} question={e.question} number = {i} value={value} setValue={setValue} />)}

    </div>
  )
}
function Element({answer,question,number,value,setValue}){
  let newValue = value=== number;


  function changeValue(){
    setValue(number)
    console.log(value)
    console.log(newValue)


  }
  return(
    <div>
      <div className="question" onClick={changeValue} style={{cursor:"pointer"}}>
        <Question number = {number} question={question} changeValue={changeValue} newValue={newValue}/>
      </div>
      <div style={newValue? {display:'block'}:{display:"none"}}>
        <Answer answer={answer} />
      </div>
    </div>
  )

}
function Question({number,question,changeValue,newValue}){
  return (
    <>
    <span>0{number}</span>
    <span>{question}</span>
    <span onClick={changeValue}>{newValue?"-":"+"}</span>
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