import { React , useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [questions, setAllQuestions] = useState([])


  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questions => setAllQuestions(questions) )
  },[])

  function handleUpdatedQuestions(deletedQuestion){
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setAllQuestions(updatedQuestions)
  }


  const listOfQuestions = questions.map(question => <QuestionItem  question={question} onUpdatedQuestions={handleUpdatedQuestions}/>)


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listOfQuestions}</ul>
    </section>
  );
}

export default QuestionList;
