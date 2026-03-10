import { useState } from "react";

export default function App(){

 const [question,setQuestion] = useState("");
 const [answer,setAnswer] = useState("");

 const askAI = async () => {

  const res = await fetch("http://localhost:3000/ask",{

   method:"POST",
   headers:{ "Content-Type":"application/json"},
   body:JSON.stringify({question})

  });

  const data = await res.json();

  setAnswer(data.answer);

 }

 return(

  <div style={{padding:40}}>

  <h1>BharatGuide AI</h1>

  <input
  value={question}
  onChange={(e)=>setQuestion(e.target.value)}
  />

  <button onClick={askAI}>
  Ask
  </button>

  <p>{answer}</p>

  </div>

 )

}
